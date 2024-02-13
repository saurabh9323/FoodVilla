import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const useResturant = () => {
  const [filterdResturant, setFilterdResturant] = useState([]);
  const [allResturant, setAllResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // async function fetchData() {
  //   const data = await fetch(BASE_URL);
  //   const json = await data?.json();

  //   const resInfo =
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants;
  //   !resInfo
  //     ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     : json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;

  //   setAllResturant(resInfo);
  //   setFilterdResturant(resInfo);
  //   console.log(json);
  // }

  async function fetchData() {
    try {
      const data = await fetch(BASE_URL);
      const json = await data.json();

      let resInfo = null;

      if (
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        resInfo =
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      } else if (
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        resInfo =
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      }

      if (resInfo) {
        setAllResturant(resInfo);
        setFilterdResturant(resInfo);
      } else {
        // Handle case when restaurant information is not found
        console.log("Restaurant information not found in the response");
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  return [filterdResturant, allResturant, setFilterdResturant];
};

export default useResturant;
