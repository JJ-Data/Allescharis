import { useState } from "react";
import { ChevronDown, MapPin, GraduationCap, Users } from "lucide-react";

const locations = ["Abuja", "Port Harcourt", "Ondo"];

export default function CareersPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">CAREERS AT ACGL</h1>

        <p className="text-xl text-center mb-8">
          Want to be a part of the work we do?
        </p>

        <p className="text-lg text-center mb-12 text-gray-600">
          Hiring Guideline: Stay Tuned On LinkedIn
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Job Location Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-2xl font-semibold">Job Location</h2>
            </div>
            <p className="mb-4">You're one step closer to your dream job.</p>
            <div className="relative mb-4">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2 text-left bg-gray-100 rounded-md flex items-center justify-between"
              >
                {selectedLocation || "Select a location"}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="https://www.linkedin.com/company/alles-charis/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Check Application
            </a>
          </div>

          {/* NYSC Internship Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-green-600" />
              <h2 className="text-2xl font-semibold">NYSC Internship</h2>
            </div>
            <p className="mb-4">
              Ready to kickstart your career? Our NYSC Internship Program offers
              corps members in Abuja, Ondo or Port Harcourt the chance to dive
              into real-world experience.
            </p>
            <p className="mb-4">
              This program equips you with essential skills, meaningful industry
              exposure, and valuable connections to kickstart your professional
              journey.
            </p>
            <a
              href="/internship"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* Retailer Community Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-2 text-purple-600" />
              <h2 className="text-2xl font-semibold">Retailer Community</h2>
            </div>
            <p className="mb-4">Be a part of our retailer community</p>
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Join our WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
