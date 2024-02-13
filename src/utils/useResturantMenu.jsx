import { useEffect, useState } from "react";
import { BASE_CDN_URL } from "../config";

const useResturantMenu = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  const [restaurantInfo, setRestaurauntInfo] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(BASE_CDN_URL + resId);
    const json = await data?.json();

    setRestauraunt(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card
    );
    setRestaurauntInfo(json?.data?.cards[0]?.card?.card?.info);
  }

  return [restaurant, restaurantInfo];
};

export default useResturantMenu;
