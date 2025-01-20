import { useState } from "react";
import { Button } from "./ui/button";

enum disp {
  DISP_1,
  DISP_2,
}

export default function Header() {
  const [display, setDisplay] = useState(disp.DISP_1);

  return (
    <header className="shadow-lg relative w-full h-[32rem]">
      <img
        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="hero_img"
        className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
      />
      <div className="w-full flex flex-col justify-center items-center absolute bg-[#00005B]/80 h-full text-center">
        {display === disp.DISP_1 ? (
          <>
            <div className="flex flex-col gap-5">
              <h1 className="text-md md:text-lg lg:text-5xl font-bold tracking-wider uppercase text-white">
                Your{" "}
                <span className="relative px-2 md:px-5">
                  <img
                    src="/assets/highlighter 1.png"
                    alt="highlights"
                    className="absolute -top-3 md:-top-5 md:-left-1 lg:-top-10 left-0 lg:-left-2 right-0"
                  />
                  One Stop{" "}
                </span>{" "}
                Integrated
                <br />
                <span className="mt-3 block">LPG Supplier</span>
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 max-w-5xl">
                Creating a seamless chain of value added service along LPG
                supply chain by delivering exceptional and on-time service.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <h1 className="text-md md:text-lg lg:text-5xl font-bold tracking-wider uppercase text-white">
                A Click away from the
                <br />
                <span className="mt-3 block">
                  LPG Service you{" "}
                  <span className="relative px-4">
                    <img
                      src="/assets/highlighter 1.png"
                      alt="highlights"
                      className="absolute -top-6 -left-2 right-0"
                    />
                    Deserve{" "}
                  </span>
                </span>
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 max-w-5xl">
                Creating a seamless chain of value added service along LPG
                supply chain by delivering exceptional and on-time service.
              </p>
            </div>
          </>
        )}
        <Button
          size="custom_1"
          className="bg-white hover:bg-white text-blue-950 px-10 py-3 rounded-lg transition-all duration-500"
          onMouseEnter={() => setDisplay(disp.DISP_2)}
          onMouseLeave={() => setDisplay(disp.DISP_1)}
        >
          {display === disp.DISP_1 ? "Contact Us Now" : "Let’s Do This!"}
        </Button>
      </div>
    </header>
  );
}
