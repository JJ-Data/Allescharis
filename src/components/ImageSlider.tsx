import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
