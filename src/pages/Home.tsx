// import About from "@/components/About";
import HeroServices from "@/components/HeroServices";
// import Header from "@/components/Header";
import HeroSliderComponent from "@/components/HeroSlider";
import Testimonial from "@/components/Testimonial";

// import WhatWeDo from "@/components/WhatWeDo";

function Home() {
    return (
        <div>
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
