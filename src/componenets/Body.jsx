import ResturantCard from "./RestaruntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/helper";
import useResturant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
// import userContext from "../utils/userContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  // const { user, setUser } = useContext(userContext);

  //custom hooks
  const [filterdResturant, allResturant, setFilterdResturant] = useResturant();
  const isLogged = useOnline();

  if (!isLogged)
    return <h1>🔴 Offline, Please Check Your Internet Connection</h1>;

  return allResturant?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center bg-backColor">
      <div className="search-container bg-backColor flex m-2 ">
        <input
          type="text"
          className="search-input mx-2 w-[300px] rounded-md text-center p-1 hover:bg-customBlue text-black"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-customBlue p-2 rounded-md hover:bg-gray-100 text-black"
          onClick={() => {
            const data = FilterData(searchInput, allResturant);
            setFilterdResturant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex felex-wrap p-2 ml-4 justify-center bg-backColor">
        <div className="flex flex-wrap p-2 gap-4 justify-center bg-backColor">
          {filterdResturant?.map((rest) => {
            return (
              <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
                <ResturantCard {...rest.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
