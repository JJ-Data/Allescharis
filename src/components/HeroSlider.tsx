import { useState, useEffect } from 'react';

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: '/assets/Image21.png',
            header: 'LPG You Can Trust',
            description: 'Count on us for consistent, dependable LPG that powers your everyday needs',
        },
        {
            image: '/assets/FuelHome.jpg',
            header: 'Fueling the Heart of Your Home',
            description: 'Cooking is at the heart of every home, and we believe in providing the best quality gas to make every meal special.',
        },
        {
            image: '/assets/Quality.JPG',
            header: 'Quality Gas Delivered to Your Doorstep',
            description: 'Enjoy the convenience of home delivery with Alles Charis Gas. We bring high-quality LPG directly to your doorstep, so you never have to worry about running out. Call: +234 (0)702 5530 076',
        },
        {
            image: '/assets/Image11.png',
            header: 'Energy You Can Trust, Service You Can Feel',
            description: 'Our dedication goes beyond providing energy; we are committed to making a positive impact through our CSR initiatives. Experience a company that cares not only about energy but also about enriching lives.',
        },
        {
            image: '/assets/Spark1.jpeg',
            header: 'A Spark of Trust, A Flame of Safety',
            description: 'Safety is at the core of everything we do, prioritizing the well-being of our customers and their families.',
        },
        {
            image: '/assets/Image2.png',
            header: 'Fueling Moments That Matter with YOU',
            description: 'With strategically located stations, we ensure that you are never far from the fuel you need.',
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
        return () => clearInterval(slideInterval); // Clear interval on component unmount
    }, []);

    return (
        <div className="relative w-full h-[40rem] text-[#000066] overflow-hidden rounded-l-[40px] rounded-tr-[100px]">
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
            `}</style>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div
                        className={`w-full h-full bg-center bg-cover ${
                            index === currentIndex ? 'slow-zoom' : ''
                        }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-gray-600 bg-opacity-60 flex flex-col justify-center items-start text-start text-white p-8">
                        <h2 className="text-xl md:text-6xl font-bold mb-2 text-[#ffffff] max-w-xl">{slide.header}</h2>
                        <p className="text-lg md:text-2xl font-medium max-w-lg text-[#ffffff] mt-4">{slide.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
