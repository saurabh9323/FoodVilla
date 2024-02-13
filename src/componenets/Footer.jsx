import { Link } from "react-router-dom";
import instagram from "../Assets/image/instagram.png";
import facebook from "../Assets/image/facebook.png";
import Linkdin from "../Assets/image/linkdin.png";
import youtube from "../Assets/image/youtube.png";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-customBlue w-full">
      <div className="flex flex-col items-center w-full h-[200px] text-center justify-center">
        <div className="w-full">
          <ul className="flex p-3 bg-customBlue w-full items-center text-center justify-center ">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 ">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="/instamart">Instamart</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col">
          <ul className="flex p-3 bg-customBlue w-full items-center text-center justify-center ">
            <li className="p-2">
              <a href="https://www.instagram.com/" target="blank">
                <img
                  className="w-8 bg-backColor hover:bg-customBlue rounded-2xl cursor-pointer border "
                  src={instagram}
                />
              </a>
            </li>
            <li className="p-2 ">
              <a href="https://www.youtube.com/" target="blank">
                <img
                  className="w-8 bg-backColor hover:bg-customBlue rounded-2xl cursor-pointer border "
                  src={youtube}
                />
              </a>
            </li>
            <li className="p-2">
              <a href="https://www.facebook.com/" target="blank">
                <img
                  className="w-8 bg-backColor  hover:bg-customBlue rounded-2xl cursor-pointer border "
                  src={facebook}
                />
              </a>
            </li>
            <li className="p-2">
              <a href="https://www.linkedin.com/" target="blank">
                <img
                  className="w-8 bg-backColor hover:bg-customBlue rounded-2xl cursor-pointer border "
                  src={Linkdin}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full ">
          <h4 className="bg-customBlue p-2">
            © {year} FoodVilla, Inc. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
