import React, { useState } from "react";
import cart from "../assets/cart.avif";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  return (
    <div className="p-2">
      <p className="text-lg font-medium">My Cart</p>
      {cartData ? (
        <p>Cart details here!</p>
      ) : (
        <div className="px-4 pb-10">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              src={cart}
              alt="empty-cart"
            />
          </div>
          <p className="my-2 text-gray-700 text-center">
            Nothing to show right now! Add item to cart to see here. Continue
            shopping...
          </p>
          <Link to={"/"}>
            <div className="inline-flex items-center justify-center w-full px-4 py-1 bg-violet-600 text-lg text-white font-medium rounded-lg">
              Continue Shopping <ArrowRight />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
