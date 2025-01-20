export default function Values() {
    return (
        <>
            {" "}
            <div className="flex flex-col px-12 py-20">
                <div className="flex flex-col justify-center items-center gap-5 mb-10">
                    <h3 className="text-4xl text-blue-900 font-semibold">Our Values</h3>
                    <p className="text-muted-foreground max-w-prose text-xl text-center">
                        At Alles Charis, every form of our operations are guided by certain
                        core values. With these core values, we have formed an acronym;
                        I.R.I.D.E. Each of these letters represent principles that we strive
                        to live by
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-2 gap-4 container relative group">
                    <div className="w-full flex gap-2 items-center">
                        <p className="w-1/3 text-center text-lg md:text-2xl font-semibold">
                            Integrity
                        </p>
                        <div className="w-2/3 sm:p-6 md:p-10 lg:p-16 rounded-full rounded-br-none bg-gray-300">
                            <img
                                src="/assets/Ellipse 1.png"
                                alt="ellipse_1"
                                className="border border-gray-200 shadow-lg rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center">
                        <p className="w-1/3 text-center text-lg md:text-2xl font-semibold order-2">
                            Respect
                        </p>
                        <div className="order-1 w-2/3 sm:p-6 md:p-10 lg:p-16 rounded-full rounded-bl-none bg-blue-900">
                            <img
                                src="/assets/Ellipse 2.png"
                                alt="ellipse_2"
                                className="shadow-lg rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center">
                        <p className="w-1/3 text-center text-lg md:text-2xl font-semibold">
                            Dependability
                        </p>
                        <div className="w-2/3 sm:p-6 md:p-10 lg:p-16 rounded-full rounded-tr-none bg-blue-900">
                            <img
                                src="/assets/Depend.png"
                                alt="ellipse_3"
                                className="shadow-lg rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center">
                        <p className="order-2 w-1/3 text-center text-lg md:text-2xl font-semibold">
                            Efficiency
                        </p>
                        <div className="order-1 w-2/3 sm:p-6 md:p-10 lg:p-16 rounded-full rounded-tl-none bg-gray-300">
                            <img
                                src="/assets/ic.jpg"
                                alt="ellipse_1"
                                className="border border-gray-200 shadow-lg rounded-full"
                            />
                        </div>
                    </div>
                    {/* Dependability */}
                    <div
                        className="h-24 w-24 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60 bg-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full group-hover:scale-75 duration-500">
                        <img
                            src="/assets/ix.jpeg"
                            alt="logo-center"
                            className="object-contain w-2/3 rounded-full"
                        />
                        <div className="absolute w-full h-full">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                {/* Apply rotation to the SVG text */}
                                <g transform="rotate(-35 50 50)">
                                    {" "}
                                    {/* Rotate the text - adjust the angle as needed */}
                                    <path
                                        id="curve"
                                        d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                                        fill="none"
                                    />
                                    <text fontSize="10" className="font-bold">
                                        <textPath xlinkHref="#curve" startOffset="0">
                                            Innovation
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div
                        className="h-24 w-24 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                        <img
                            src="/assets/Vector 10.png"
                            alt="logo-center"
                            className="object-contain w-1/3 absolute translate-x-28 translate-y-12 group-hover:translate-x-4 group-hover:translate-y-4 duration-500"
                        />
                        <img
                            src="/assets/Vector 8.png"
                            alt="logo-center"
                            className="object-contain w-1/3 absolute -translate-x-28 translate-y-12 group-hover:-translate-x-4 group-hover:translate-y-4 top-0 right-0 duration-500"
                        />
                        <img
                            src="/assets/Vector 9.png"
                            alt="logo-center"
                            className="object-contain w-1/3 absolute translate-x-28 -translate-y-12 group-hover:translate-x-4 group-hover:-translate-y-4 bottom-0 left-0 duration-500"
                        />
                        <img
                            src="/assets/Vector 11.png"
                            alt="logo-center"
                            className="object-contain w-1/3 absolute -translate-x-28 -translate-y-12 group-hover:-translate-x-4 group-hover:-translate-y-4 bottom-0 right-0 duration-500"
                        />
                    </div>
                </div>
            </div>
            {/* Improved Core Principles section */}
            <div className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-4xl text-blue-900 font-bold mb-12 text-center">
                        Core Principles <span className="text-blue-600">[I.R.I.D.E]</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description:
                                    "We leverage the latest technology to drive continuous development and transformation in our operations.",
                            },
                            {
                                title: "Respect",
                                description:
                                    "We uphold the highest regard for our customers, employees, the public, and the environment in all our actions.",
                            },
                            {
                                title: "Integrity",
                                description:
                                    "Transparency and honesty are at the heart of everything we do, essential to achieving our goals.",
                            },
                            {
                                title: "Dependability",
                                description:
                                    "We are committed to consistently providing customer satisfaction through timely delivery and high-quality services.",
                            },
                            {
                                title: "Efficiency",
                                description:
                                    "We maximize output while minimizing energy usage and reducing waste, ensuring sustainable and responsible operations.",
                            },
                        ].map((principle, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h4 className="text-2xl text-blue-800 font-semibold mb-3 flex items-center">
                  <span className="text-3xl text-blue-600 mr-2">
                    {principle.title[0]}
                  </span>{" "}
                                    <br/>
                                    {principle.title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
