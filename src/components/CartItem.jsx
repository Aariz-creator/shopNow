
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div
      className="flex flex-col items-center justify-between
      hover:scale-105 transition duration-300 ease-in
      gap-3 p-4 rounded-xl outline bg-white"
    >
      {/* Title */}
      <div className="w-full">
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      {/* Image */}
      <div className="h-[180px] flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Price & Remove */}
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">
          ${item.price}
        </p>

        <button
          onClick={removeFromCart}
          className="flex items-center gap-1
          text-gray-700 border-2 border-gray-700 rounded-full
          font-semibold text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700 hover:text-white
          transition duration-300 ease-in"
        >
          <FcDeleteDatabase size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
