import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { IMG_CDN_URL, BASE_MENU_IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, restaurantInfo] = useResturantMenu(resId);

  const dispatch = useDispatch();
  const handleChange = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="bg-backColor flex flex-col justify-center items-center text-center">
      <div className="flex justify-between items-center space-x-6">
        <div className="flex justify-between">
          <img
            className="m-4 rounded-2xl"
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          />
        </div>

        <div>
          <h2 className="font-bold m-2">{restaurantInfo?.name}</h2>
          <h3 className="m-2 font-semibold">{restaurantInfo?.areaName}</h3>
          <h3 className="m-2 font-semibold">{restaurantInfo?.city}</h3>
          <h3 className="m-2 font-semibold">
            {restaurantInfo?.avgRating} stars
          </h3>
          <h3 className="m-2 font-semibold">
            {restaurantInfo?.costForTwoMessage}
          </h3>
        </div>
      </div>
      <div className="restarunat-menu-card flex flex-col items-center justify-start ">
        <h1 className="font-extrabold  my-4 ">Menu</h1>
        <ul className="restarunat-menu flex flex-wrap justify-center outline outline-customBlue border-t-gray-50 mx-8">
          {Object?.values(restaurant?.itemCards).map((item) => (
            <li
              className="flex flex-col justify-evenly items-center text-center rounded-lg shadow-lg w-[220px] p-4 hover:outline outline-offset-2  outline-gray-100 my-4 mx-6 bg-backColor "
              key={item.card.info.id}
            >
              <img
                className="w-[200px] rounded-md m-4"
                src={BASE_MENU_IMG_URL + item?.card?.info?.imageId}
              />
              <h2 className="font-bold">{item?.card?.info?.name}</h2>
              <button
                className="p-2 w-[60px] bg-customBlue m-2 rounded-xl hover:bg-sky-800"
                onClick={() => {
                  handleChange(item);
                }}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
