import {useState} from "react";
import {Button} from "@/components/ui/button";
import {newsFeeds, photos} from "@/lib/data";

enum Tabs {
    FEED,
    PHOTO,
}

export default function MediaPage() {
    const [activeTab, setActiveTab] = useState(Tabs.PHOTO);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="mx-auto container p-5 sm:p-8 md:p-12 lg:p-16">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
                    Media Gallery
                </h1>
                <div className="flex justify-center gap-4 mb-12">
                    <Button
                        size="lg"
                        onClick={() => setActiveTab(Tabs.FEED)}
                        className={`${
                            activeTab === Tabs.FEED
                                ? "bg-blue-800 hover:bg-blue-700 shadow-lg"
                                : "bg-white text-blue-800 hover:bg-blue-50"
                        } uppercase font-semibold text-sm sm:text-base transition-all duration-300 rounded-full px-6 py-3`}
                    >
                        Article/Newsfeed
                    </Button>
                    <Button
                        size="lg"
                        onClick={() => setActiveTab(Tabs.PHOTO)}
                        className={`${
                            activeTab === Tabs.PHOTO
                                ? "bg-blue-800 hover:bg-blue-700 shadow-lg"
                                : "bg-white text-blue-800 hover:bg-blue-50"
                        } uppercase font-semibold text-sm sm:text-base transition-all duration-300 rounded-full px-6 py-3`}
                    >
                        Photo Gallery
                    </Button>
                </div>
                <div className="mt-8">
                    {activeTab === Tabs.PHOTO ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-lg aspect-square group"
                                >
                                    <img
                                        src={photo.img}
                                        alt={photo.text}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-center">
                                        <p className="text-white text-sm font-semibold p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {photo.text}
                                        </p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsFeeds.map((feed, index) => (
                                <a
                                    key={index}
                                    href={feed.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={feed.img}
                                        alt={feed.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold text-blue-900 mb-2">
                                            {feed.title}
                                        </h2>
                                        <p className="text-gray-600">{feed.subtitle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
