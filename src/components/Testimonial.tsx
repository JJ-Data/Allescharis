// import React from 'react';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialData = [
  {
    name: "Mr Segun",
    role: "Customer Owo Station",
    text: "I love coming to Alles Charis gas to fill my cylinder because I know my gas is going to be accurate, no cheating. I also love the way you people attend to me starting from the gate where your staff will help me carry my cylinder to the point where I pay money. Your customer service still remain the best in Owo.",
    rating: 5,
  },
  {
    name: "Mrs Belema",
    role: "Customer Port Harcourt Station",
    text: "I've purchased gas from here several times, and compared to other places I've bought from, your gas lasts longer. The customer service is also commendable I'd rate it 80%!",
    rating: 4,
  },
  {
    name: "Mrs Loveth",
    role: "Customer Port Harcourt Station",
    text: "The product is great, and the meter works well. I appreciate that it lasts long. You guys are doing an excellent job! ",
    rating: 5,
  },
  {
    name: "Mr Thomas",
    role: "Customer: 3D Gas Abuja",
    text: "Alles charis product is of good quality. Their service is top notch and second to none. The best in Abuja.",
    rating: 5,
  },
];

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const TestimonialCard = ({
  name,
  role,
  text,
  rating,
}: {
  name: string;
  role: string;
  text: string;
  rating: number;
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm mx-auto">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <div className="font-bold">{name}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </div>
);

const NavButton = ({
  direction,
  onClick,
}: {
  direction: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 -translate-y-1/2 ${
        direction === "prev" ? "left-4" : "right-4"
      }
      bg-white text-blue-600 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
    `}
    aria-label={direction === "prev" ? "Previous" : "Next"}
  >
    {direction === "prev" ? (
      <ChevronLeft size={24} />
    ) : (
      <ChevronRight size={24} />
    )}
  </button>
);

const Testimonial = () => {
  const items = testimonialData.map((testimonial, index) => (
    <TestimonialCard key={index} {...testimonial} />
  ));

  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-blue-900 text-center mb-4">
          Testimonials
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          What our clients from across the nation are saying
        </p>
        <div className="relative">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={5000}
            infinite
            keyboardNavigation
            renderPrevButton={() => (
              <NavButton direction="prev" onClick={() => {}} />
            )}
            renderNextButton={() => (
              <NavButton direction="next" onClick={() => {}} />
            )}
            disableDotsControls
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
