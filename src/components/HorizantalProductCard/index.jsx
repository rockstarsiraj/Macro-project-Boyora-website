import { useCart } from "../../context/card.context";

export const HorizantalProductCard = ({ product }) => {
  const { cartDispatch } = useCart();

  const onRemoveClick = (id) => {
    cartDispatch({
      type: "REMOVE-FROM-CART",
      payload: id,
    });
  };

  return (
    <div className="card-horizontal d-flex shadow ">
      <div className="card-hori-image-container relative">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details d-flex direction-column">
        <div className="card-des">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>
        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button
              onClick={() => onRemoveClick(product.id)}
              className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
            >
              <span class="material-symbols-outlined">
                remove_shopping_cart
              </span>
              Remove From Cart
            </button>
          </div>
          {/* <div className='cta-btn'>
            <button className='button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin'>
              Move to Wishlist
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
