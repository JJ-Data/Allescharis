import ContactForm from "@/components/ContactForm";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <header className="shadow-lg relative w-full md:min-h-[75vh] min-h-screen h-full">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="hero_img"
          className="bg-cover bg-no-repeat w-full h-full object-cover absolute mix-blend-normal"
        />
        <div className="w-full flex flex-col justify-center items-center absolute bg-[#00005B]/70 text-white h-full text-center">
          <div className="mx-auto container py-16 px-4 sm:px-8 md:px-16 lg:px-28 border-white h-full flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-5 justify-around">
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
              <div className="flex space-x-4">
                <FaFacebook className="text-white" size={24} />
                <FaLinkedin className="text-white" size={24} />
                <FaYoutube className="text-white" size={24} />
                <AiFillInstagram className="text-white" size={24} />
              </div>
            </div>
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
