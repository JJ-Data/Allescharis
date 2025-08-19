import { LazyLoadImage } from "react-lazy-load-image-component";


type TProps = {
  title: string;
  subtitle: string;
  src: string;
};

const Card = ({ title, subtitle, src }: TProps) => {
  return (
    <div
      className="flex flex-col space-y-9 group transition-all duration-500 rounded-lg overflow-hidden 
      shadow-md hover:shadow-xl blue-card blue-hover-effect"
    >
      <LazyLoadImage
        effect="blur"
        src={src}
        alt="what_we_do_img"
        className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="hidden flex-col space-y-8 px-5 group-hover:flex transition-all duration-500 
        blue-gradient-soft py-6 animate-fade-in"
      >
        <h5 className="text-3xl font-semibold text-center text-blue-900 blue-text-glow">
          {title}
        </h5>
        <p className="text-xl text-center text-blue-800">{subtitle}</p>
      </div>
    </div>
  );
};

export default function WhatWeDo() {
  return (
    <div className="flex bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-8 px-5">
        <Card
          title="Production"
          subtitle="With industry expertise and experience we have created a partnership
            with GREEN ENERGY INTERNATIONAL LIMITED to produce LPG and propane
            cylinder. This allows us to be a key player in the production phase
            of LPG."
          src="/assets/Production.jpg"
        />
        <Card
          title="Distribution"
          subtitle="With industry certified bridgers we intend to carry LPG from the production field to our different storage facility across the country. We will also help our clients carry from coastal or inland facilities over long distances. Our Bobtails will be used for short-distance distribution and logistics"
          src="/assets/Distribution.JPG"
        />
        <Card
          title="Retail"
          subtitle="To be truly end to end, we will serve end users for personal or commercial use. The satisfaction of the end user is our goal."
          src="/assets/Retail.JPG"
        />
        <Card
          title="Storage"
          subtitle="We have built storage facilities across the nation to ease the distribution of LPG. Adherence to safety standards and in time delivery will ensure customer satisfaction."
          src="/assets/Storage.JPG"
        />
      </div>
    </div>
  );
}
