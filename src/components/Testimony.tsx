import { testimonialData } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { QuoteIcon } from "lucide-react";

type TProps = {
  name: string;
  text: string;
  location: string;
};

const Card = ({ name, text, location }: TProps) => {
  return (
    <div
      className="relative flex flex-col justify-between gap-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 
      shadow-lg p-8 rounded-2xl opacity-90 hover:opacity-100 transition-all duration-500 group 
      hover:shadow-xl hover:shadow-blue-200/50 border border-blue-100 animate-fade-in-up"
    >
      <QuoteIcon className="absolute -top-4 -left-4 w-8 h-8 text-blue-400/30" />
      <div className="relative">
        <p className="text-lg text-blue-800 leading-relaxed italic">"{text}"</p>
      </div>
      <div className="flex gap-4 items-center">
        <div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 
          flex items-center justify-center text-white font-bold text-xl shadow-lg
          transform group-hover:scale-110 transition-transform duration-300"
        >
          {name.charAt(0)}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-blue-900 blue-text-glow">
            {name}
          </h3>
          <p className="text-blue-600">{location}</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
      <Link
        to="/contact"
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
          group-hover:transform group-hover:-translate-y-2 transition-all duration-300"
      >
        <Button
          className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-300/50 
          transition-all duration-300 rounded-full px-6"
        >
          Contact us
        </Button>
      </Link>
    </div>
  );
};

export default function Testimony() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16">
      <div className="absolute inset-0 bg-grid-blue-900/[0.02] -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 blue-text-glow mb-4">
            Our Customers Love Us
          </h2>
          <p className="text-blue-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience with us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative">
          {testimonialData.map(({ name, text, location }, index) => (
            <Card name={name} text={text} location={location} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
