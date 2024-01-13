import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/images/hero.jpg";

const backgroundStyle = {
  backgroundImage: `url('src/assets/images/hero.jpg')`,
  backgroundSize: "cover", // Cover the entire div
  backgroundRepeat: "no-repeat", // Do not repeat the image
  backgroundPosition: "center", // Center the image
};

function HeroComponent() {
  return (
    <>
      <div
        style={backgroundStyle}
        className="flex justify-center p-6 md:py-12 lg:py-24"
        id="overview"
      >
        <div className="w-full max-w-screen-xl px-4 md:px-0 flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4 mb-6 md:mb-12 text-gray-800">
              All-in-one, <span className="text-orange-500">RMP Search </span>
              and <span className="text-orange-500">Popup</span> extension
            </h1>
            <p className="text-lg md:text-xl lg:text-[1.6rem] mb-6 md:mb-12 leading-6 md:leading-8 text-gray-700">
              Eliminate tab switching when searching for professors. Install our
              extension, see ratings next to professors' names on the SIS page,
              and effortlessly find any professor with a single click
            </p>
            <div className="flex flex-wrap gap-4 mb-6 md:mb-12">
              <button className="bg-orange-500 text-white font-semibold px-5 py-3 text-lg md:text-xl rounded-lg border-orange-500 border-2 hover:bg-orange-700">
                Chrome Store
              </button>
              <button className="bg-white text-black font-semibold px-5 py-3 text-lg md:text-xl rounded-lg border-orange-500 border-2 hover:bg-gray-100">
                Install Now
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faArrowRight}
                  size="sm"
                  style={{ color: "#000000" }}
                />
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <iframe
              className="rounded-xl ml-20"
              height="287"
              width="480"
              src="https://www.youtube.com/embed/k5E2AVpwsko?autoplay=1&amp;mute=1&amp;rel=0"
              title="What Is Prisma?"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
