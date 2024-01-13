import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";

function TestimonialComponent() {
  const bgHalf = {
    background: "linear-gradient(to bottom, #F97316 50%, #F7FAFC 50%)",
  };
  return (
    <>
      <div
        style={bgHalf}
        className="flex flex-col items-center bg-orange-500 px-4 sm:px-8 lg:px-0"
        id="testimonials"
      >
        <div className="w-full flex justify-center items-center flex-wrap">
          <div className="flex items-center my-6 md:my-12 mx-0 md:mx-32">
            <FontAwesomeIcon
              className="pr-2"
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size="3x"
            />
            <div className="text-white text-xl sm:text-2xl lg:text-3xl inline-block">
              <p className="inline-block font-bold">Open Source</p> on GitHub
            </div>
          </div>
          <div className="flex items-center my-6 md:my-12 mx-0 md:mx-32">
            <FontAwesomeIcon
              className="pr-2"
              icon={faFeather}
              style={{ color: "#ffffff" }}
              size="3x"
            />
            <div className="text-white text-xl sm:text-2xl lg:text-3xl inline-block">
              <p className="inline-block font-bold">LightWeight</p> extension
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default TestimonialComponent;
