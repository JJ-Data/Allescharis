import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/assets/Image21.png",
      header: "LPG You Can Trust",
      description:
        "Count on us for consistent, dependable LPG that powers your everyday needs",
    },
    {
      image: "/assets/FuelHome.jpg",
      header: "Fueling the Heart of Your Home",
      description:
        "Cooking is at the heart of every home, and we believe in providing the best quality gas to make every meal special.",
    },
    {
      image: "/assets/Quality.JPG",
      header: "Quality Gas Delivered to Your Doorstep",
      description:
        "Enjoy the convenience of home delivery with Alles Charis Gas. We bring high-quality LPG directly to your doorstep, so you never have to worry about running out. Call: +234 (0)702 5530 076",
    },
    {
      image: "/assets/Image11.png",
      header: "Energy You Can Trust, Service You Can Feel",
      description:
        "Our dedication goes beyond providing energy; we are committed to making a positive impact through our CSR initiatives. Experience a company that cares not only about energy but also about enriching lives.",
    },
    {
      image: "/assets/Spark1.jpeg",
      header: "A Spark of Trust, A Flame of Safety",
      description:
        "Safety is at the core of everything we do, prioritizing the well-being of our customers and their families.",
    },
    {
      image: "/assets/Ore3.jpg",
      header: "Fueling Moments That Matter with YOU",
      description:
        "With strategically located stations, we ensure that you are never far from the fuel you need.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [nextSlide]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-[40rem] overflow-hidden rounded-l-[40px] rounded-tr-[100px]">
      <style>{`
                @keyframes slowZoom {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.1);
                    }
                }
                .slow-zoom {
                    animation: slowZoom 8s ease-out forwards;
                }
                @keyframes blue-glow-pulse {
                    0%, 100% {
                        text-shadow: 0 0 5px rgba(0, 0, 255, 0.3), 0 0 20px rgba(0, 0, 150, 0.2);
                    }
                    50% {
                        text-shadow: 0 0 20px rgba(0, 0, 255, 0.6), 0 0 40px rgba(0, 0, 150, 0.4);
                    }
                }
                .blue-glow-text {
                    animation: blue-glow-pulse 3s ease-in-out infinite;
                }
            `}</style>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <motion.button
          onClick={prevSlide}
          className="p-2 rounded-full bg-blue-900/70 hover:bg-blue-900 text-white transition-all duration-300"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(0, 0, 150, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </motion.button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <motion.button
          onClick={nextSlide}
          className="p-2 rounded-full bg-blue-900/70 hover:bg-blue-900 text-white transition-all duration-300"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(0, 0, 150, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </motion.button>
      </div>

      {/* Slides indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-900 w-8" : "bg-white/70"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div
            className={`w-full h-full bg-center bg-cover slow-zoom`}
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-blue-900/60 flex flex-col justify-center items-start text-start text-white p-8">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-6xl font-bold mb-2 text-white blue-glow-text"
              >
                {slides[currentIndex].header}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl font-medium max-w-lg text-white mt-4"
              >
                {slides[currentIndex].description}
              </motion.p>
              <motion.button
                variants={itemVariants}
                className="mt-6 px-6 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-100 transition-all duration-300 blue-glow"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
