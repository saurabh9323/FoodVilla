import aboutImg from "../Assets/image/about.png";

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img id="image0" className="w-full" x={0} y={0} src={aboutImg} />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            FoodVilla, a culinary haven, blends passion with flavor. Our journey
            began with a vision to craft exceptional dining experiences.
            Committed to sourcing fresh, local ingredients, our menu reflects
            diverse tastes and traditions. Embracing quality and community, we
            strive to create an inviting ambiance where every guest feels
            cherished. Our dedicated team, driven by shared values, curates
            memorable moments. From sizzling delicacies to warm hospitality,
            FoodVilla is a celebration of culinary artistry and heartfelt
            service. Join us on this flavorful odyssey as we redefine dining
            with delectable creations and a commitment to enriching your palate
            and your experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
