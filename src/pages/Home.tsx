import { Helmet } from "react-helmet-async";

// import About from "@/components/About";
import HeroServices from "@/components/HeroServices";
// import Header from "@/components/Header";
import HeroSliderComponent from "@/components/HeroSlider";
import Testimonial from "@/components/Testimonial";

// import WhatWeDo from "@/components/WhatWeDo";

function Home() {
    return (
        <div>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Alles Charis Gas Limited</title>
                <meta name="description" content="Alles Charis Gas Ltd delivers clean, safe, and affordable cooking gas across Nigeria. Order fast with safety guaranteed." />
                <meta name="keywords" content="top 10 gas company in Nigeria, cooking gas delivery, LPG Nigeria, gas refill, gas cylinder, gas safety, Alles Charis, affordable gas" />
                <meta name="author" content="Alles Charis Gas Ltd" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            
            {/* <Header /> */}
            <div className="px-10 md:px-32 pt-5">
                <HeroSliderComponent/>
            </div>

            <HeroServices/>
            <section id="about">{/* <About /> */}</section>
            <section id="whatwedo">{/* <WhatWeDo /> */}</section>
            <Testimonial/>
        </div>
    );
}

export default Home;
