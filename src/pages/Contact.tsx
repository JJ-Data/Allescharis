import ContactForm from "@/components/ContactForm";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <header className="shadow-lg relative w-full md:min-h-[75vh] min-h-screen h-full">
        <img
          src="/assets/stationbg.JPG"
          alt="hero_img"
          className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
        />
        <div className="w-full flex flex-col justify-center items-center absolute bg-[#00005B]/70 text-white h-full text-center">
          <div className="mx-auto container py-16 px-4 sm:px-8 md:px-16 lg:px-28 border-white h-full flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-6 justify-around">
              <div>
                <p className="text-xl text-white text-left uppercase">
                  connect with us
                </p>
                <h1 className="text-md md:text-lg lg:text-5xl font-bold tracking-wider uppercase text-white w-10/12 text-left">
                  A Click away from the LPG Service you
                  <span className="relative inline-block px-8">
                    <img
                      src="/assets/highlighter 1.png"
                      alt="highlights"
                      className="absolute -top-2 left-0 rotate-180"
                    />{" "}
                    deserve{" "}
                  </span>
                </h1>
              </div>

              {/* Social Icons with Links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/allescharis"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <AiFillInstagram
                    className="text-white hover:text-blue-300"
                    size={24}
                  />
                </a>
              </div>

              {/* Contact Info with Icons */}
              <div className="mt-6 text-left text-white space-y-4 max-w-md">
                <p className="text-base md:text-lg">
                  You can also reach out through the following channels:
                </p>
                <div className="flex items-center space-x-3">
                  <MdEmail size={22} className="text-white" />
                  <a
                    href="mailto:info@allescharis.ng"
                    className=" hover:text-blue-200 text-lg"
                  >
                    info@allescharis.ng
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhone size={22} className="text-white" />
                  <a
                    href="tel:+2349160757838"
                    className=" hover:text-blue-200 text-lg"
                  >
                    +234 916 075 7838
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
