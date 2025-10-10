import ContactForm from "@/components/ContactForm";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      {/* Make background layers absolute, but keep foreground content relative so it determines height */}
      <header className="shadow-lg relative w-full min-h-[70vh] lg:min-h-screen overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/stationbg.JPG"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tint layer */}
        <div className="absolute inset-0 bg-[#00005B]/70" aria-hidden="true" />

        {/* Foreground content (NOT absolute) */}
        <div className="relative w-full text-white">
          <div className="container mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-28">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column */}
              <div className="flex-1 flex flex-col gap-6 justify-around">
                <div>
                  <p className="text-xl uppercase text-left">connect with us</p>

                  <h1 className="text-lg md:text-2xl lg:text-5xl font-bold tracking-wider uppercase text-left w-11/12">
                    A Click away from the LPG Service you{" "}
                    <span className="relative inline-block align-baseline">
                      <span className="relative z-10 px-2">deserve</span>
                      {/* Highlighter scales with the word */}
                      <img
                        src="/assets/highlighter 1.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-2 left-0 w-full h-auto rotate-180"
                      />
                    </span>
                  </h1>
                </div>

                {/* Social Icons with Links */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="https://facebook.com/allescharis"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook
                      className="text-white hover:text-blue-300"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/alles-charis/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin
                      className="text-white hover:text-blue-300"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=GkljyYADgzM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <FaYoutube
                      className="text-white hover:text-blue-300"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/allescharis_/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram
                      className="text-white hover:text-blue-300"
                      size={24}
                    />
                  </a>
                </div>

                {/* Contact Info with Icons */}
                <div className="mt-6 text-left space-y-4 max-w-md">
                  <p className="text-base md:text-lg">
                    You can also reach out through the following channels:
                  </p>

                  <div className="flex items-center gap-3">
                    <MdEmail size={22} className="text-white" />
                    <a
                      href="mailto:info@allescharis.ng"
                      className="hover:text-blue-200 text-lg break-all"
                    >
                      info@allescharis.ng
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdPhone size={22} className="text-white" />
                    <a
                      href="tel:+2349160757838"
                      className="hover:text-blue-200 text-lg"
                    >
                      +234 916 075 7838
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column: Contact Form */}
              <div className="flex-1 w-full max-w-[560px] mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
