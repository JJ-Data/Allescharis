import { photos } from "@/lib/data";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto container p-5 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
          Photo Gallery
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <LazyLoadImage
                effect="blur"
                src={photo.img}
                alt={photo.text}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-white text-sm font-semibold p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
