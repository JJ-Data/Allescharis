import { testimonialData } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type TProps = {
  name: string;
  text: string;
  location: string;
};

const Card = ({ name, text, location }: TProps) => {
  return (
    <div className="flex flex-col justify-between gap-8 bg-white shadow-lg p-6 rounded-lg opacity-70 hover:opacity-100 transition-all duration-500 group">
      <p className="text-lg">{text}</p>
      <div className="flex gap-3">
        {/*<img*/}
        {/*  src={img}*/}
        {/*  alt={name}*/}
        {/*  className="object-cover object-center h-16 w-16 rounded-full"*/}
        {/*/>*/}
        <div className="flex flex-col gap-1 justify-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      <Link to="/contact" className="hidden group-hover:block">
        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-500">
          Contact us now
        </Button>
      </Link>
    </div>
  );
};

export default function Testimony() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">
      {testimonialData.map(({ name, text, location }, index) => (
        <Card
          name={name}
          text={text}
          location={location}
          key={index}
        />
      ))}
    </div>
  );
}
