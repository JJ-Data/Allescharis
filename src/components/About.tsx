export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 capitalize">
                About Us
              </h2>
              <p className="text-2xl lg:text-3xl text-blue-700 font-light">
                Our Story
              </p>
              <div className="space-y-6 text-blue-800 text-lg">
                <p>
                  Alles Charis Gas Limited (ACGL) is a leading indigenous energy
                  company in Nigeria’s oil and gas industry, specializing in
                  Liquefied Petroleum Gas (LPG). As a key player in the sector,
                  we provide safe, efficient, and sustainable energy solutions,
                  ensuring seamless access for individuals and businesses. With
                  operations spanning production, storage, logistics, retail,
                  and wholesale, ACGL remains committed to driving energy
                  security and industry excellence across Nigeria.
                </p>
                <p>
                  Driven by a commitment to excellence, ACGL has achieved
                  remarkable growth, establishing a strong presence across three
                  key regions in Nigeria. With a proven track record of
                  reliability, including over 98% on-time delivery, our
                  strategic expansion and customer-focused approach reinforce
                  our position as a trusted industry leader in the LPG sector.
                </p>
                <p>
                  Additionally, beyond business, ACGL is dedicated to social
                  impact—investing in medical outreach, educational
                  scholarships, and youth empowerment initiatives. As an
                  indigenous company with a global outlook, we continue to
                  innovate and expand, delivering value-driven energy solutions
                  that drive economic and social progress.
                </p>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <img
                src="/assets/Property 1=Default.jpg"
                alt="Alles Charis Gas Limited"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-blue-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                Mission
              </h3>
              <p className="text-blue-800 text-lg">
                To become a profitable business venture that provides safe and
                dependable Liquefied Petroleum Gas (LPG) solutions that empower
                our customers to meet their energy needs establish by excellent
                client service, on-time delivery, and continuous support of our
                team members.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                Vision
              </h3>
              <p className="text-blue-800 text-lg">
                To be a leader within the gas sub-sector of the Nigerian oil and
                gas industry on Liquefied Petroleum Gas solutions by creating a
                seamless chain of value-added service across the LPG supply
                chain in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
