// import React from 'react';

type TProps = {
    title: string;
    subtitle: string;
    src: string;
};

const WedoCard = ({title, subtitle, src}: TProps) => {
    return (
        <div
            className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 group scale-95 hover:scale-100 transition-all duration-500">
            <div
                className="flex-1 group-hover:border-4 sm:group-hover:border-8 border-white group-hover:shadow-lg rounded-2xl">
                <img src={src} alt={title} className="scale-95 group-hover:scale-100"/>
            </div>
            <div className="flex-1">
                <h5 className="text-2xl sm:text-3xl font-semibold font-poppins text-gray-800">{title}</h5>
                <p className="text-base sm:text-lg lg:text-xl mt-3 sm:mt-5 font-inter text-gray-600 leading-relaxed">{subtitle}</p>
            </div>
        </div>
    );
};

const Wedo = () => {
    return (
        <div className="flex flex-col max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins text-gray-900">What We
                Do</h2>
            <WedoCard
                title="Retail"
                subtitle="To be truly end-to-end, we will cater to the diverse needs of both personal and commercial users. Our comprehensive approach ensures that we address the specific requirements of each segment, providing tailored solutions that enhance their experience. The satisfaction of the end user is our ultimate goal, and we are committed to delivering exceptional value through our products and services. By focusing on the unique demands of individual and business clients, we aim to build long-lasting relationships founded on trust and excellence."
                src="/assets/Retail.JPG"
            />
            <WedoCard
                title="Distribution"
                subtitle="With industry-certified bridgers, we will transport LPG from production fields to storage facilities nationwide, adhering to high safety and quality standards. We will also assist clients in moving LPG from coastal or inland facilities over long distances. For short-distance distribution, our fleet of Bobtails will provide swift service, navigating various terrains to deliver LPG directly to end-users while maintaining product integrity. Our comprehensive logistics network meets diverse client needs with flexible solutions."
                src="/assets/Distribution.JPG"
            />
            <WedoCard
                title="Storage"
                subtitle="We have built storage facilities across the nation to ease the distribution of LPG. By adhering to strict safety standards and ensuring timely delivery, we aim to guarantee customer satisfaction. Our commitment to excellence in logistics and distribution helps us maintain high-quality service and meet the needs of our diverse clientele effectively. Through these efforts, we strive to build lasting relationships with our customers, based on trust, reliability, and superior performance in LPG distribution."
                src="/assets/Storage.JPG"
            />
            <WedoCard
                title="Production"
                subtitle="With industry expertise and experience, we have partnered with GREEN ENERGY INTERNATIONAL LIMITED to produce LPG and propane cylinders. This collaboration allows us to be a key player in the production phase of LPG. By leveraging our combined strengths, we aim to enhance production efficiency, maintain high-quality standards, and meet the growing demand for LPG. Our partnership underscores our commitment to innovation and excellence in the energy sector, positioning us as a leader in the industry."
                src="/assets/Production.jpg"
            />
        </div>
    );
};

export default Wedo;