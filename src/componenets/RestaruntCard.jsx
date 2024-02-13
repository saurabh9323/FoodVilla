/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import userContext from "../utils/userContext";

const ResturantCard = ({ cloudinaryImageId, name, costForTwo, cuisines }) => {
  // const { user } = useContext(userContext);

  return (
    <div className="shadow-lg w-[220px] h-[280px] rounded-lg items-center text-center hover:outline outline-offset-2  outline-gray-100  m-2 bg-backColor">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt={name}
        className="w-22 p-2 rounded-lg shadow-sm "
      />
      <div className="info align-text-center  flex flex-col py-2">
        <h5 className="font-bold">{name}</h5>
        <h6 className="font-semibold">{costForTwo}</h6>
        <h6>{cuisines.join(" ,").split(",").slice(0, 4)}</h6>
        {/* <h1>
          {user.name} - {user.email}
        </h1> */}
      </div>
    </div>
  );
};
export default ResturantCard;
