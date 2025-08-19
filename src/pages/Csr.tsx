import { LazyLoadImage } from "react-lazy-load-image-component";


export default function CSRPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-[65dvh] shadow-lg">
        <LazyLoadImage
          effect="blur"
          src="/assets/Csrbg.jpg"
          alt="CSR background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bg-[#00005B]/70 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Commitment to Shared Growth and Impact
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            At Alles Charis Gas, we are more than a business—we are a partner in
            progress. Our CSR initiatives are tailored to create measurable
            impact and shared prosperity.
          </p>
        </div>
      </header>

      {/* CSR Cards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 bg-gray-50 text-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              number: "1",
              title: "OWO MEDICAL OUTREACH",
              description:
                "In 2024, ACGL spearheaded a medical outreach program in Owo, offering free consultations, screenings, and medications to 177 community members.",
              image: "/assets/owo-medical.jpg",
            },
            {
              number: "2",
              title: "EDUCATIONAL SCHOLARSHIPS",
              description:
                "Since 2022, ACGL has supported students in the Kango community through scholarships, relieving families of school fees and encouraging academic success.",
              image: "/assets/education.jpg",
            },
            {
              number: "3",
              title: "SKY FOUNDATION PARTNERSHIP",
              description:
                "With a ₦300,000 donation and volunteer support, ACGL backed SKY’s summer programme to nurture creativity and growth in children.",
              image: "/assets/SkyFCSR.jpeg",
            },
            {
              number: "4",
              title: "Community Obligations:",
              description:
                "As part of our Corporate Social Responsibility (CSR) commitments to our host communities, we provide financial support for liaison officers, award educational scholarships to qualified indigenes, and fund vocational training programs aimed at empowering community members with practical skills for sustainable livelihoods",
              image: "/assets/clo.PNG",
            },
            {
              number: "5",
              title: "YOUTH EMPOWERMENT & CAPACITY BUILDING",
              description:
                "Our NYSC Internship Program offers practical industry training, helping graduates gain skills and confidence in the LPG sector.",
              image: "/assets/youth.jpg",
            },
            {
              number: "6",
              title: "Nkpolu Medical Outreach",
              description:
                "As part of its Corporate Social Responsibility (CSR) commitment, Alles Charis Limited organized a free medical outreach in Nkpolu, Port Harcourt, to improve access to healthcare among underserved populations. The initiative provided essential services such as malaria treatment, health screenings, HIV testing, and health education to 182 beneficiaries. It aimed not only to meet immediate medical needs but also to promote long-term community wellness through preventive care and lifestyle counselling.",
              image: "/assets/NkpoluCSR.png",
            },
            {
              number: "7",
              title: "GridironGEMS Project",
              description:
                "We proudly supported the GridironGEMS initiative with a contribution of ₦10 million and volunteering, reinforcing our commitment to inclusion and community empowerment. In partnership with the Nigerian American Football Association (NAFA), this impactful programme aims to utilize American football to empower women and girls across Nigeria thus fostering leadership, mentorship, and grassroots development. It will also support the preparation of Nigeria’s Female Flag Football Team ahead of the LA28 Olympics.",
              image: "/assets/GiridonGems.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <LazyLoadImage
                effect="blur"
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-blue-700 w-10 h-10 flex items-center justify-center rounded-full border border-blue-300">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#00005B] text-white py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our CSR Drive
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Partner with us to make lasting impact across communities. Whether
            you're an individual, an NGO, or a corporate body—there’s room at
            the table for shared progress.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#00005B] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
