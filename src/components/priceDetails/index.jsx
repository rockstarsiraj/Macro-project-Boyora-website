import { useCart } from "../../context/card.context";
import { useNavigate } from "react-router-dom";
import { getTotalCardAmount } from "../../utils/getTotalCartAmount";
export const PriceDetails = () => {
  const { cart } = useCart();
  const TotalCardAmount = getTotalCardAmount(cart);
  const deliveryCharge = 49;
  const navigate = useNavigate();
  const loadscript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const displayRazorpay = async () => {
    await loadscript("https://checkout.razorpay.com/v1/checkout.js");
    const options = {
      key: "rzp_test_VSdp7X3k39GwBk",
      amount: (TotalCardAmount + deliveryCharge) * 100,
      currency: "INR",
      name: "BUYORA",
      description: "Thank you for shopping with us.Have a Nice Day ._.",
      // image:"https://therightfit.netlify.app/The&20Right%20Fit-logos.jpeg",
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        navigate("/");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="w-[400px] bg-[#fafafa]   p-4">
        <p className="text-2xl border-b-4 border-gray-500 pb-2">
          Price Details{" "}
          <span class="material-symbols-outlined">shopping_bag_speed</span>
        </p>
        <div className="flex flex-col gap-5 border-b p-2">
          <div className="flex">
            <p>Price ({cart.length} ) items</p>
            <p className="ml-auto">RS.{TotalCardAmount}</p>
          </div>
          <div className="flex">
            <p>
              Delivery Charges{" "}
              <span class="material-symbols-outlined text-1xl">
                delivery_truck_bolt
              </span>
            </p>
            <p className="ml-auto">RS. {deliveryCharge}</p>
          </div>
        </div>
        <div className="flex p-2">
          <p>Total Amount</p>
          <p className="ml-auto">RS.{TotalCardAmount + deliveryCharge}</p>
        </div>
        <div className="p-2">
          <button
            onClick={displayRazorpay}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin "
          >
            <span class="material-symbols-outlined text-3xl">
              local_shipping
            </span>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
