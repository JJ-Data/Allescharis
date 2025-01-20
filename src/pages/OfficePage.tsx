import StationsSelectMap from "@/components/StationsMap";

export default function OfficePage() {
  return (
    <div className="flex flex-col">
      <header className="shadow-lg relative w-full h-[65dvh]">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="hero_img"
          className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
        />
        <div className="w-full flex flex-col justify-center items-center absolute bg-[#00005B]/70 text-white h-full text-center">
          <h2 className="text-4xl">Our Nationwide LPG Stations</h2>
          <p className="text-xl max-w-[70ch]">
            Welcome to our Command Centers, strategically located across 26
            states in Nigeria. Our offices are always nearby, ensuring prompt
            support and efficient service. Thank you for choosing us as your
            trusted partner in fueling a brighter, cleaner future.
          </p>
        </div>
      </header>
      <div className="flex pt-36">
        <StationsSelectMap />
      </div>
    </div>
  );
}
