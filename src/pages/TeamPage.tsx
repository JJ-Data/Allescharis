// import React, { useState } from "react";
import { manager } from "@/lib/data";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import ManagerCarousel from "@/components/ManagerCarousel";

// type TProps = {
//   item: { name: string; position: string; img: string };
// };

// const Manager = ({ item }: TProps) => {
//   const { position, img, name } = item;
//   return (
//     <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
//       <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-blue-500">
//         <img src={img} alt={name} className="w-full h-full object-cover" />
//       </div>
//       <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
//       <p className="text-lg text-blue-600 font-semibold">{position}</p>
//     </div>
//   );
// };

export default function TeamPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Led by a Management Team with a proven track record of excellence
            and people development, the high quality of decision makers leading
            the company gives assurance of quality decision making and
            exceptional business development.
          </p>
        </div>

        <ManagerCarousel managers={manager} />

        {/* <div className="mt-24 space-y-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className=" mb-8 md:mb-0 md:mr-12 overflow-hidden rounded-2xl border-4 border-blue-500">
                <img
                  src="/assets/Avatar.png"
                  alt="Folajomi Adegbulugbe"
                  className="w-full h-full max-w-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Folajomi Adegbulugbe
                </h2>
                <h3 className="text-xl text-blue-600 font-semibold mb-6">
                  Executive Director
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Folajomi Adegbulugbe is an innovative and performance-driven
                  Entrepreneur with a passion for consumer, technology, and
                  finance. He has earned two M.Sc.'s in International Business
                  and Finance from Hult International Business School, Boston,
                  and graduated from Obafemi Awolowo University, Ile-Ife with a
                  BSc. in Consumer Science. Folajomi has founded several
                  ventures, leading them to be value-driven and
                  self-sustainable. Before Alles Charis, he held key roles in
                  companies like Venture Garden Group and All Grace Energy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className=" mb-8 md:mb-0 md:mr-12 overflow-hidden rounded-2xl border-4 border-blue-500">
                <img
                  src="/assets/Avatar_director.png"
                  alt="Samuel Ogbole"
                  className="w-full h-full max-w-sm object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Samuel Ogbole
                </h2>
                <h3 className="text-xl text-blue-600 font-semibold mb-6">
                  Executive Director
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Samuel has garnered international experiences with key
                  achievements in countries like Kenya and England in
                  non-profit, public, and private sectors. He oversees the
                  administrative, human resource, and project management affairs
                  at Alles Charis, ensuring success from hiring to project
                  oversight. He is a graduate of Management from Warwick
                  Business School, Coventry, UK.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
