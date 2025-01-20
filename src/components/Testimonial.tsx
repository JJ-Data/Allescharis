// import React from 'react';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Star, ChevronLeft, ChevronRight} from 'lucide-react';

const testimonialData = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        text: "This product has revolutionized our workflow. Highly recommended!",
        rating: 5
    },
    {
        name: "Jane Smith",
        role: "Manager, RetailGiant",
        text: "Exceptional service and support. It's been a game-changer for our team.",
        rating: 4
    },
    {
        name: "Alex Johnson",
        role: "Freelancer",
        text: "I've tried many solutions, but this one stands out. It's intuitive and powerful.",
        rating: 5
    },
    {
        name: "Sarah Williams",
        role: "Director, HealthCare Inc.",
        text: "The impact on our efficiency has been remarkable. Thank you!",
        rating: 5
    },
];

const responsive = {
    0: {items: 1},
    768: {items: 2},
    1024: {items: 3},
};

const TestimonialCard = ({name, role, text, rating}: { name: string, role: string, text: string, rating: number }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm mx-auto">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}/>
            ))}
        </div>
        <p className="text-gray-600 mb-4">{text}</p>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
    </div>
);

const NavButton = ({direction, onClick}: { direction: string, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`
      absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? 'left-4' : 'right-4'}
      bg-white text-blue-600 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
    `}
        aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
        {direction === 'prev' ? <ChevronLeft size={24}/> : <ChevronRight size={24}/>}
    </button>
);

const Testimonial = () => {
    const items = testimonialData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
    ));

    return (
        <section className="bg-gray-100 py-16 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-blue-900 text-center mb-4">Testimonials</h2>
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
                        renderPrevButton={() => <NavButton direction="prev" onClick={() => {
                        }}/>}
                        renderNextButton={() => <NavButton direction="next" onClick={() => {
                        }}/>}
                        disableDotsControls
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;