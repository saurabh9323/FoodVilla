import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../config";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  // console.log(items);
  const handleChange = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <ul className="restarunat-menu flex flex-wrap justify-center outline outline-customBlue border-t-gray-50 mx-8">
        {cartItems.map((item, index) => (
          <li
            className="flex flex-col justify-evenly items-center text-center rounded-lg shadow-lg w-[220px] p-4 hover:outline outline-offset-2  outline-gray-100 my-4 mx-6 bg-backColor "
            key={index}
          >
            <img
              className="w-[200px] rounded-md m-4"
              src={IMG_CDN_URL + item.card?.info?.imageId}
            />
            <h2 className="font-bold">{item?.card?.info?.name}</h2>
            <h2 className="font-bold">{item?.card?.info?.category}</h2>
            <h2 className="font-bold">
              {item?.card?.info?.description.split("").slice(0, 4)}
            </h2>
            <h2 className="font-bold">₹ {item?.card?.info?.price / 100}</h2>
            <button
              className="p-2 w-[80px] bg-customBlue m-2 rounded-xl hover:bg-sky-800"
              onClick={() => {
                handleChange(index);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
