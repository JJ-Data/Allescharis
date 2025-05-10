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
  <div className="blue-card p-6 m-4 max-w-sm mx-auto rounded-lg hover:blue-glow transition-all duration-300">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="text-blue-800 mb-6 italic">{`"${text}"`}</p>
    <div className="border-t border-blue-100 pt-4">
      <h4 className="text-lg font-semibold text-blue-900">{name}</h4>
      <p className="text-blue-600">{role}</p>
    </div>
  </div>
);

export default function Testimonial() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 blue-text-glow mb-12">
          What Our Customers Say
        </h2>
        <div className="relative">
          <AliceCarousel
            mouseTracking
            items={testimonialData.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={5000}
            infinite
            renderPrevButton={() => (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600/20 
                hover:bg-blue-600/40 text-white transition-all duration-300 blue-glass"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            renderNextButton={() => (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600/20 
                hover:bg-blue-600/40 text-white transition-all duration-300 blue-glass"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}
