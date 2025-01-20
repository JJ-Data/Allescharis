import { useState } from "react";
// import Testimony from "@/components/Testimony";
import Wedo from "@/components/Wedo";
import { Button } from "@/components/ui/button";
import Testimonial from "@/components/Testimonial.tsx"

enum Tabs {
  Wedo,
  Testimonial,
}

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState(Tabs.Wedo);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="mx-auto container p-5 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Our Services
        </h1>
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <Button
              onClick={() => setActiveTab(Tabs.Wedo)}
              className={`${
                activeTab === Tabs.Wedo
                  ? "bg-blue-800 text-white"
                  : "bg-transparent text-blue-800 hover:bg-blue-100"
              } uppercase font-semibold text-sm sm:text-base transition-all duration-300 rounded-full px-6 py-3 mr-1`}
            >
              What we do
            </Button>
            <Button
              onClick={() => setActiveTab(Tabs.Testimonial)}
              className={`${
                activeTab === Tabs.Testimonial
                  ? "bg-blue-800 text-white"
                  : "bg-transparent text-blue-800 hover:bg-blue-100"
              } uppercase font-semibold text-sm sm:text-base transition-all duration-300 rounded-full px-6 py-3`}
            >
              Testimonial
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500">
          {activeTab === Tabs.Wedo && <Wedo />}
          {activeTab === Tabs.Testimonial && <Testimonial />}
        </div>
      </div>
    </div>
  );
}
