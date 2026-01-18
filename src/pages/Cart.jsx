import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    {cart.length > 0 ? (
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          

          {/* Cart Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-20">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-700 mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
            Checkout Now
          </button>
        </div>

      </div>
    ) : (
      /* Empty Cart State */
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold text-gray-700">
          Your Cart is Empty
        </h1>
        <Link to="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Shop Now
          </button>
        </Link>
      </div>
    )}
  </div>
);
}

export default Cart;

