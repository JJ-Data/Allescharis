import { MoveRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

type TBadgeProps = {
  title: string;
  subtitle: string;
};

const Badge = ({ title, subtitle }: TBadgeProps) => {
  return (
    <div className="rounded-full p-4 bg-white h-56 w-56 flex flex-col gap-1 justify-center items-center border-8 border-gray-400/60 hover:bg-[#000066] group hover:border-blue-950 overflow-hidden">
      <div className="flex">
        <FaStar size={20} className="text-gray-200 group-hover:text-white" />
        <FaStar size={20} className="text-gray-200 group-hover:text-white" />
        <FaStar size={20} className="text-gray-200 group-hover:text-white" />
      </div>
      <p className="text-4xl font-bold text-[#000066] group-hover:text-white">
        {title}
      </p>
      <span className="w-10/12 text-center px-2 leading-5 text-lg text-blue-900 group-hover:text-white">
        {subtitle}
      </span>
      <MoveRight
        size={24}
        className="mt-3 -translate-x-28 group-hover:translate-x-0 transition-all duration-500 ease-in group-hover:text-white"
      />
    </div>
  );
};

export default function Quality() {
  return (
    <div className="bg-gradient-tor from-violet-200 to-white p-12 w-full flex justify-center items-center mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Badge
          title="98.5%"
          subtitle="on time 
        delivery rate"
        />
        <Badge
          title="15000"
          subtitle="metric tons
supply capacity
per annum"
        />
        <Badge
          title="3"
          subtitle="states of the 
federation"
        />
        <Badge
          title="11"
          subtitle="retail station 
spread across
 the nation"
        /> 
      </div>
    </div>
  );
}
