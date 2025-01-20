import {AiFillInstagram} from "react-icons/ai";
import {FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-950">
            <div className="container p-5 flex flex-col md:flex-row justify-between">
                <div className="flex flex-row md:flex-col justify-between gap-3">
                    <Link to="/" className="text-white text-xl">
                        Alles Charis
                    </Link>
                    <div className="flex space-x-4">
                        <FaFacebook className="text-white" size={24}/>
                        <FaLinkedin className="text-white" size={24}/>
                        <FaYoutube className="text-white" size={24}/>
                        <AiFillInstagram className="text-white" size={24}/>
                    </div>
                </div>
                <div
                    className="grid grid-cols-3 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-16 text-white text-sm sm:text-base mt-8 md:mt-0">
                    <div className="flex flex-col gap-5">
                        <a href="/about" className="hover:text-muted-foreground">
                            About Us
                        </a>
                        <a href="/services" className="hover:text-muted-foreground">
                            Who We Are
                        </a>
                        <Link to="/team" className="hover:text-muted-foreground">
                            Our Team
                        </Link>

                        <a href="/about" className="hover:text-muted-foreground">
                            Our Value
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="/#about" className="hover:text-muted-foreground">
                            Services
                        </a>
                        <a href="/services" className="hover:text-muted-foreground">
                            LPG Logistics
                        </a>
                        <Link to="/team" className="hover:text-muted-foreground">
                            Bulk Installations
                        </Link>
                        <a href="/services" className="hover:text-muted-foreground">
                            Retail Services
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="/about" className="hover:text-muted-foreground">
                            Contact
                        </a>
                        <a href="/contact" className="hover:text-muted-foreground">
                            Contact Information
                        </a>
                        <Link to="/team" className="hover:text-muted-foreground">
                            Careers/Opportunities
                        </Link>
                        <a href="/stations" className="hover:text-muted-foreground">
                            Station Locations
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
