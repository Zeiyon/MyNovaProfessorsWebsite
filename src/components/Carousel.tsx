import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    text: "Every single template is carefully crafted by her from a design perspective.Every single template is carefully crafted by her from a design perspective.Every single template is carefully crafted by her from a design perspective.",
    image:
      "https://www.ratemygmuprofessors.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftartilj.e4f4d56b.png&w=48&q=75",
    name: "Jane Doe",
    title: "Designer",
  },
  {
    text: "Thanks to Anna's templates we've just launched our 5th website! Definitely worth the investment.",
    image:
      "https://www.ratemygmuprofessors.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftartilj.e4f4d56b.png&w=48&q=75",
    name: "John Smith",
    title: "Entrepreneur",
  },
  {
    text: "Every single template is carefully crafted by her from a design perspective.Every single template is carefully crafted by her from a design perspective.Every single template is carefully crafted by her from a design perspective.",
    image:
      "https://www.ratemygmuprofessors.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftartilj.e4f4d56b.png&w=48&q=75",
    name: "Jane Doe",
    title: "Designer",
  },
  {
    text: "Thanks to Anna's templates we've just launched our 5th website! Definitely worth the investment.",
    image:
      "https://www.ratemygmuprofessors.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftartilj.e4f4d56b.png&w=48&q=75",
    name: "John Smith",
    title: "Entrepreneur",
  },
  // ...add more testimonials as needed
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 2.5; // Number of slides to show at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden w-full">
        {/* Slides */}
        <div
          className="flex transition-transform ease-out duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Only one slide should be visible at a time
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-4 md:w-2/5" // On medium screens and above, show 2.5 slides
              style={{ maxWidth: "100%" }} // Each slide should take full width on small screens
            >
              <div className="flex flex-col items-start text-center space-y-6 bg-white p-8 m-4 rounded-2xl shadow-lg">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-600">
                  <FontAwesomeIcon
                    className="mb-4"
                    icon={faQuoteLeft}
                    style={{ color: "#F97316" }}
                  />{" "}
                  {testimonial.text}"
                </p>
                <div className="flex items-center ml-8">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-20 h-20 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-xl md:text-2xl text-gray-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-3">
        <button className="text-black p-3 mb-8" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
        </button>
        <button className="text-black p-3 mb-8" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} size="2xl" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
