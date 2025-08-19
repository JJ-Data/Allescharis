import {useState, useEffect} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {FaLinkedin} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";


type ManagerType = {
    name: string;
    position: string;
    img: string;
    linkedin: string;
};

const Manager = ({item}: { item: ManagerType }) => {
    const {position, img, name, linkedin} = item;
    return (
        <div
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-blue-500">
                <LazyLoadImage effect="blur" src={img} alt={name} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-lg text-blue-600 font-semibold mb-4">{position}</p>
            {linkedin && (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                    aria-label={`${name}'s LinkedIn profile`}
                >
                    <FaLinkedin size={24}/>
                </a>
            )}
        </div>
    );
};

const ManagerCarousel = ({managers}: { managers: ManagerType[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const autoPlayInterval = 5000; // 5 seconds

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === managers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? managers.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval> | undefined;
        if (isAutoPlay) {
            intervalId = setInterval(nextSlide, autoPlayInterval);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlay]);

    const handleMouseEnter = () => setIsAutoPlay(false);
    const handleMouseLeave = () => setIsAutoPlay(true);

    return (
        <div
            className="relative w-full max-w-lg mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="overflow-hidden rounded-xl shadow-md">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}
                >
                    {managers.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <Manager item={item}/>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
                <ChevronLeft size={24} className="text-blue-500"/>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
                <ChevronRight size={24} className="text-blue-500"/>
            </button>
        </div>
    );
};

export default ManagerCarousel;