import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { testimonialData } from "@/lib/data";

const responsive = {
  0: {
    items: 1,
  },

  960: {
    items: 4,
  },
};

const items = testimonialData.map((view, index) => {
  return (
    <div className="p-5 bg-blue-500" key={index}>
      <p className="">{view.text}</p>
    </div>
  );
});

function TestimonyCard() {
  return (
    <AliceCarousel
      key="carousel"
      mouseTracking
      controlsStrategy="alternate"
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      touchTracking
      keyboardNavigation
    />
  );
}

export default TestimonyCard;
