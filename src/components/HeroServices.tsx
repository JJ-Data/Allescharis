import { LazyLoadImage } from "react-lazy-load-image-component";


const HeroServices = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#000066]">Your Trusted Energy Partner</h2>
            <p className="text-center mb-12 text-gray-700">
                With a remarkable 98.5% on-time delivery rate and a supply capacity of 180,000 metric tons per annum,
                we consistently provide reliable and efficient LPG solutions to meet the energy needs of our customers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        title: "Production",
                        image: "/assets/Image2.png",
                        description: "We produce high-quality LPG, ensuring that every batch meets the highest safety and quality standards. Our state-of-the-art facilities and advanced processes guarantee a reliable and consistent energy source."
                    },
                    {
                        title: "Distribution",
                        image: "/assets/Image.png",
                        description: "With a robust distribution network, we ensure that our products reach you wherever you are. Our efficient logistics team manages the seamless transport of LPG to our various outlets and partners, maintaining a remarkable on-time delivery rate."
                    },
                    {
                        title: "Retail",
                        image: "/assets/Image3.png",
                        description: "Our retail division provides direct access to our premium LPG products. We prioritize customer satisfaction and make it easy for our users to access our products."
                    },
                    {
                        title: "Storage",
                        image: "/assets/Image4.png",
                        description: "Safety and reliability are paramount in our storage solutions. We maintain secure and well-regulated storage facilities that ensure the safe handling and preservation of LPG. Our storage capacity allows us to meet high demand and provide uninterrupted supply to our customers."
                    },
                    {
                        title: "Gas Home Delivery",
                        image: "/assets/Image11.png",
                        description: "We are committed to timely and safe deliveries, making your life easier and more comfortable. Simply place your order, and we'll handle the rest, allowing you to focus on what matters most."
                    },
                    {
                        title: "Value Added Service",
                        image: "/assets/Image21.png",
                        description: "At Alles Charis Gas, we go beyond just providing LPG. Our value-added services are designed to enhance your experience and ensure you get the most out of our products. From expert consultations and safety checks to installation services and maintenance support, we are dedicated to meeting all your energy needs."
                    }
                ].map((service, index) => (
                    <div key={index}
                         className="p-6 rounded-lg bg-[#f1f5f9] hover:bg-[#000066] transition-colors duration-300 group">
                        <LazyLoadImage
                            effect="blur"
                            className="w-[50px] h-[50px] rounded-full border-2 border-blue-600 group-hover:border-white transition-colors duration-300 mb-6 group-hover:scale-125"
                            src={service.image} alt={service.title}/>
                        <h3 className="text-xl font-semibold mb-1 text-[#4f5053] group-hover:text-white capitalize transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <p className="text-center my-12 text-gray-700">
                Alles Charis Gas, your trusted partner for comprehensive LPG solutions.
            </p>
        </div>
    );
}

export default HeroServices;