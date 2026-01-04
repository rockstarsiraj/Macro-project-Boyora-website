import { useCart, useWish } from "../../context";
import { findProductInCart, findProductsInWish } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Productcard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wish, wishDispatch } = useWish();
  const navigateCart = useNavigate();
  const navigateWish = useNavigate();
  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWish = findProductsInWish(wish, product.id);
  const onCartClick = (product) => {
    if (!isProductInCart) {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      cartDispatch({
        type: "ADD-TO-CART",
        payload: { product },
      });
    } else {
      navigateCart("/cart");
    }
  };

  const onWishClick = (product) => {
    if (!isProductInWish) {
      localStorage.setItem("wish", JSON.stringify([...wish, product]));
      wishDispatch({
        type: "ADD-TO-WISH",
        payload: { product },
      });
    } else {
      navigateWish("/wish");
    }
  };
  return (
    <div
      className="
   card card-vertical d-flex direction-column relative shadow bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]

from-[#f4f5db]
via-[#d9dab0]
to-[#487e95]"
    >
      <div className="card-image-container ">
        <img
          className="card-image object-cover w-full h-80"
          src={product.images[0]}
          alt="shoes"
        />
      </div>
      <div className="card-details">
        <div className="card-des">{product.title}</div>
        <div className="card-description">
          <p className="card-des">
            <span class="material-symbols-outlined">currency_rupee_circle</span>
            {product.price}
          </p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => onWishClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-symbols-outlined text-3xl hover:cursor-pointer">
              {isProductInWish ? "heart_check" : "favorite"}
            </span>
            {isProductInWish ? "Go to Wishlist" : "Add to wishlist"}
          </button>
          <button
            onClick={() => onCartClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin "
          >
            <span className="material-symbols-outlined text-3xl hover:cursor-pointer ">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go to Cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
