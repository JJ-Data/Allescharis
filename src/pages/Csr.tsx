export default function CSRPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-[65dvh] shadow-lg">
        <img
          src="/assets/Csrbg.jpg"
          alt="CSR background"
          className="absolute w-full h-full object-cover mix-blend-normal"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
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
              image: "/assets/sky.jpg",
            },
            {
              number: "4",
              title: "COMMUNITY LIAISON OFFICERS (CLOs)",
              description:
                "We pay CLO salaries in Nkpolu and Elelenwon to strengthen ties with host communities and foster mutual engagement.",
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
              title: "PROMOTING ENVIRONMENTAL SUSTAINABILITY",
              description:
                "We adopt eco-friendly practices—from low-emission logistics to sustainable operations—ensuring a greener tomorrow.",
              image: "/assets/enviroment.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
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
    </div>
  );
}
