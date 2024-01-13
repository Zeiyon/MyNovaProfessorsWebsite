import "../index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCog, faHeart } from "@fortawesome/free-solid-svg-icons";

const FeatureRow: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-wrap justify-center sm:justify-between md:justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-48 my-8 md:my-32 p-8"
        id="features"
      >
        {/* Feature 1 */}
        <div className="text-center w-full md:w-auto mb-6 md:mb-0">
          <FontAwesomeIcon
            icon={faRocket}
            size="5x"
            className="text-orange-500 mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">Fast Performance</h3>
          <p className="text-gray-500 text-lg">
            Optimized for the best speed and latency.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center w-full md:w-auto mb-6 md:mb-0">
          <FontAwesomeIcon
            icon={faCog}
            size="5x"
            className="text-orange-500 mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">Customizable</h3>
          <p className="text-gray-500 text-lg">
            Adaptable to your specific needs.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center w-full md:w-auto">
          <FontAwesomeIcon
            icon={faHeart}
            size="5x"
            className="text-orange-500 mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">Loved by Users</h3>
          <p className="text-gray-500 text-lg">
            A favorite among developers and users alike.
          </p>
        </div>
      </div>

      <div className="space-y-24 md:my-48">
        {/* First Row */}
        <div className="flex flex-col md:flex-row w-full md:w-2/3 mx-auto">
          {/* Text on the Left */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              Rating Popup
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professor Rating in SIS
            </h2>
            <p className="text-gray-800 text-lg md:text-xl">
              View the professor's RateMyProfessor rating right next to their
              name, displaying in a dynamic color. Click to hover to view more
              information, such as % would take again, level of difficulty or
              view their page by clicking the link
            </p>
          </div>

          {/* Image on the Right */}
          <div className="flex w-full md:w-1/2 justify-end items-center mr-6">
            <img
              src="https://placehold.co/400x500/"
              alt="Feature"
              className="object-cover w-4/5 md:w-4/6 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row w-full md:w-2/3 mx-auto">
          {/* Image on the Left */}
          <div className="flex w-full md:w-1/2 justify-start items-center mb-8 md:mb-0 ml-6">
            <img
              src="https://placehold.co/400x500/"
              alt="Feature"
              className="object-cover w-4/5 md:w-4/6 rounded-lg shadow-md"
            />
          </div>

          {/* Text on the Right */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-8">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">
              Profesor Search
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Search Any Professor
            </h2>
            <p className="text-gray-800 text-lg md:text-xl">
              With a click of a button, on the very same page, you can search
              for any professor from any school through the extension icon. Just
              click it and search away. You can view the same amount of
              information as the popup, and for more information click the link
              to go to their full RateMyProfessor page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureRow;
