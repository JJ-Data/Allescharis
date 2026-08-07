import { Helmet } from "react-helmet-async";
import StationsSelectMap from "@/components/StationsMap";

export default function OfficePage() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Cooking Gas Delivery & LPG Stations in Abuja, Port Harcourt & Ondo State | Alles Charis</title>
        <meta name="description" content="Find your nearest Alles Charis LPG station for cooking gas delivery and gas refill in Abuja, gas supply in Port Harcourt, and LPG in Ondo State." />
        <link rel="canonical" href="https://www.allescharis.ng/stations" />
      </Helmet>
      <header className="shadow-lg relative w-full h-[65dvh]">
        <img
          src="/assets/stationbg.JPG"
          alt="hero_img"
          className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
        />
        <div className="w-full flex flex-col justify-center items-center absolute bg-[#00005B]/70 text-white h-full text-center">
          <h1 className="text-4xl">Our Nationwide LPG Stations</h1>
          <p className="text-xl max-w-[70ch]">
            Welcome to our Command Centers, strategically located across 26
            states in Nigeria. Our offices are always nearby, ensuring prompt
            support and efficient service. Thank you for choosing us as your
            trusted partner in fueling a brighter, cleaner future.
          </p>
        </div>
      </header>

      <section className="px-6 md:px-20 pt-16 grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Cooking Gas Delivery Abuja</h2>
          <p>
            Our LPG supplier network in Abuja covers Life Camp, Kuje,
            Gwagwalada and Kubwa, offering same-day cooking gas delivery and
            gas refill.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Gas Company Port Harcourt</h2>
          <p>
            Stations in Ada George, Elelenwo and Nkpolu make Alles Charis a
            leading LPG supplier for homes and businesses across Port
            Harcourt.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">LPG Ondo State</h2>
          <p>
            With stations in Akure, Owo, Ore and Igba, we supply LPG across
            Ondo State, including our refilling plant in Owo.
          </p>
        </div>
      </section>

      <div className="flex pt-16">
        <StationsSelectMap />
      </div>
    </div>
  );
}
