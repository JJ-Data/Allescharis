import { useState } from "react";
import { Button } from "./ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";

enum disp {
  DISP_1,
  DISP_2,
}

export default function Header() {
  const [display, setDisplay] = useState(disp.DISP_1);

  return (
    <header className="shadow-xl relative w-full h-[32rem]">
      <LazyLoadImage
        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="hero_img"
        effect="blur"
        className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
      <div className="w-full flex flex-col justify-center items-center absolute h-full text-center z-10">
        <div className="flex flex-col gap-5 animate-fade-in">
          {display === disp.DISP_1 ? (
            <div className="flex flex-col gap-5">
              <h1 className="text-md md:text-lg lg:text-5xl font-bold tracking-wider uppercase text-white blue-text-glow">
                Your{" "}
                <span className="relative px-2 md:px-5">
                  <LazyLoadImage
                    effect="blur"
                    src="/assets/highlighter 1.png"
                    alt="highlights"
                    className="absolute -top-3 md:-top-5 md:-left-1 lg:-top-10 left-0 lg:-left-2 right-0"
                  />
                  <span className="text-blue-200">One Stop</span>{" "}
                </span>{" "}
                Integrated
                <br />
                <span className="mt-3 block animate-pulse-blue">
                  LPG Supplier
                </span>
              </h1>
              <p className="mb-8 text-lg font-normal text-blue-100 lg:text-xl sm:px-16 lg:px-48 max-w-5xl blue-text-shadow">
                Creating a seamless chain of value added service along LPG
                supply chain by delivering exceptional and on-time service.
              </p>
              <Button
                className="mx-auto px-8 py-6 bg-blue-600/80 hover:bg-blue-700/90 text-white rounded-full
                  transition-all duration-300 transform hover:scale-105 blue-glow hover:blue-glow"
                onMouseEnter={() => setDisplay(disp.DISP_2)}
              >
                Learn More
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h1 className="text-md md:text-lg lg:text-5xl font-bold tracking-wider uppercase text-white blue-text-glow">
                A Click away from the
                <br />
                <span className="mt-3 block">
                  LPG Service you{" "}
                  <span className="relative px-4">
                    <LazyLoadImage
                      effect="blur"
                      src="/assets/highlighter 1.png"
                      alt="highlights"
                      className="absolute -top-6 -left-2 right-0"
                    />
                    <span className="text-blue-200">Deserve</span>
                  </span>
                </span>
              </h1>
              <p className="mb-8 text-lg font-normal text-blue-100 lg:text-xl sm:px-16 lg:px-48">
                With a focus on safety and reliability, we provide high-quality
                LPG solutions that meet your energy needs.
              </p>
              <Button
                className="mx-auto bg-blue-100 hover:bg-blue-200 text-blue-900 px-10 py-3 rounded-lg 
                  transition-all duration-300 blue-hover-effect"
                onMouseLeave={() => setDisplay(disp.DISP_1)}
              >
                Explore Our Services
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
