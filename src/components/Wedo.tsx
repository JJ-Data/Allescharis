type TProps = {
  title: string;
  subtitle: string;
  src: string;
};

const WedoCard = ({ title, subtitle, src }: TProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 group transition-all duration-500">
      <div className="flex-1 overflow-hidden rounded-2xl shadow-md border-2 border-transparent group-hover:border-blue-200">
        <img
          src={src}
          alt={title}
          className="w-full h-64 md:h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h5 className="text-2xl sm:text-3xl font-semibold font-poppins text-gray-800">
          {title}
        </h5>
        <p className="text-base sm:text-lg lg:text-xl mt-4 font-inter text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Wedo = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-poppins text-gray-900">
          What We Do
        </h2>

        <WedoCard
          title="Production"
          subtitle="With deep industry expertise and strategic investments, Alles Charis plays an active role in the production phase of Liquefied Petroleum Gas (LPG). We ensure that all our LPG products meet the highest quality standards, supporting Nigeria's growing energy needs. Our focus on innovation and operational efficiency positions us as a trusted contributor to the LPG value chain, committed to safe and sustainable energy solutions."
          src="/assets/Production.jpg"
        />
        <WedoCard
          title="Storage"
          subtitle="To support seamless distribution, we have established LPG storage facilities in key locations across the country. These facilities adhere to stringent safety standards while ensuring continuous product availability. By strengthening our storage infrastructure, Alles Charis ensures timely and consistent supply to meet the needs of our diverse clientele."
          src="/assets/Storage.JPG"
        />
        <WedoCard
          title="Distribution"
          subtitle="Our logistics network includes industry-certified bridgers and a dedicated fleet of Bobtails for both long- and short-distance LPG transportation. From production sites to inland destinations, we prioritize safety, punctuality, and product integrity. Our adaptable distribution model enables us to effectively serve residential, commercial, and industrial customers throughout Nigeria."
          src="/assets/Distribution.JPG"
        />
        <WedoCard
          title="Bulk Sales"
          subtitle="We offer bulk LPG supply solutions to large-scale consumers such as industries, commercial facilities, and institutional clients. Our bulk sales service is designed to ensure reliable delivery, competitive pricing, and tailored supply agreements that meet the operational demands of high-volume users."
          src="/assets/Bulk.jpg"
        />
        <WedoCard
          title="Retail"
          subtitle="Alles Charis provides LPG solutions tailored to the distinct needs of personal and commercial users. We are dedicated to delivering exceptional value, emphasizing safety, reliability, and accessibility. Our end-to-end approach ensures that every customer—from households to businesses—receives high-quality service and dependable support."
          src="/assets/EndUser.jpg"
        />
        <WedoCard
          title="End User Consumption"
          subtitle="From cooking gas in households to fuel for industrial processes, Alles Charis ensures that LPG reaches the final consumer efficiently and safely. We focus on customer satisfaction by providing dependable service, ongoing support, and educational outreach on safe usage practices, promoting energy access and affordability at the grassroots level."
          src="/assets/user.jpg"
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
            Want to partner with us?
          </h3>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wedo;
