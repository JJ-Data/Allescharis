export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000066] capitalize">
                About Us
              </h2>
              <p className="text-2xl lg:text-3xl text-gray-600 font-light">
                Our Story
              </p>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Alles Charis Gas Limited (ACGL) is a pioneering company
                  dedicated to being Nigeria's foremost end-to-end supplier of
                  LPG and gas products. Founded in 2018, we have made it our
                  mission to address critical industry issues, including erratic
                  gas supply, high prices, and frequent shortages.
                </p>
                <p>
                  Our comprehensive services cover every aspect of the LPG
                  supply chain, from production and storage to logistics,
                  retail, wholesale, bulk sales for industrial users, and
                  end-user consumption. At ACGL, we are committed to resolving
                  key challenges in the industry such as price fluctuations,
                  limited domestic LPG manufacturing, a lack of specialized
                  logistics companies, innovation gaps, and product quality
                  concerns.
                </p>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <img
                src="/assets/Property 1=Default.jpg"
                alt="Alles Charis Gas Limited"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-[#000066] mb-4">
                Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To become a profitable business venture that provides safe and
                dependable Liquefied Petroleum Gas (LPG) solutions that empower
                our customers to meet their energy needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-[#000066] mb-4">
                Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To lead the gas sub-sector of the Nigerian oil and gas industry
                by providing exceptional Liquefied Petroleum Gas (LPG)
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
