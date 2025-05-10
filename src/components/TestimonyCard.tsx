import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { QuoteIcon } from "lucide-react";
import { testimonialData } from "@/lib/data";

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const items = testimonialData.map((view, index) => {
  return (
    <div
      className="p-8 mx-3 blue-card rounded-2xl hover:blue-hover-effect transition-all duration-300
        relative group animate-fade-in-up"
      key={index}
    >
      <QuoteIcon className="absolute -top-4 -left-4 w-8 h-8 text-blue-400/30" />
      <p className="text-blue-800 italic mb-6 leading-relaxed">"{view.text}"</p>
      <div className="flex items-center mt-6">
        <div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 
          flex items-center justify-center text-white font-bold text-xl shadow-lg
          transform group-hover:scale-110 transition-transform duration-300"
        >
          {view.name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-blue-900 font-semibold text-lg blue-text-glow">
            {view.name}
          </p>
          <p className="text-blue-600 text-sm">{view.location}</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
    </div>
  );
});

function TestimonyCard() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-grid-blue-900/[0.02] -z-10" />
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={5000}
        infinite
        disableDotsControls
        renderPrevButton={() => (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
            bg-blue-600/20 hover:bg-blue-600/40 text-white transition-all duration-300 
            transform hover:scale-110 -translate-x-4"
          >
            ←
          </button>
        )}
        renderNextButton={() => (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
            bg-blue-600/20 hover:bg-blue-600/40 text-white transition-all duration-300 
            transform hover:scale-110 translate-x-4"
          >
            →
          </button>
        )}
      />
    </div>
  );
}

export default TestimonyCard;
