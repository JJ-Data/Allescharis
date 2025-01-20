import React, { useState, useCallback } from "react";
import { MapPin } from "lucide-react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const locations = [
  {
    city: "Abuja",
    stations: [
      {
        name: "Life Camp",
        address:
          "Plot 918, Cadastral Zone opposite Holy Family Catholic Church, Behind La Vida local, Lifecamp.",
        phone: "09165593865",
        lat: 9.0765,
        lng: 7.3986,
      },
      {
        name: "Kuje 1",
        address:
          "Plot 1 along 1000 units Pengi road, Kuchiyako district, Kuje.",
        phone: "09166942224",
        lat: 8.8765,
        lng: 7.2356,
      },
      {
        name: "Kuje 2",
        address:
          "Plot 2, Kango district, along Holy Family Road before Funtag School, Kuje.",
        phone: "09166695324",
        lat: 8.8799,
        lng: 7.2399,
      },
      {
        name: "Gwagwalada",
        address: "District 3 Dukpa Layout, after SOS school, Gwagwalada.",
        phone: "09165804886",
        lat: 8.9431,
        lng: 7.0909,
      },
      {
        name: "Kubwa",
        address:
          "Alles Charis Gas, opp Dantata Estate(2nd gate), along Chikakuwere, Arab Road, Kubwa",
        phone: "",
        lat: 9.1567,
        lng: 7.3286,
      },
    ],
  },
  {
    city: "Ondo",
    stations: [
      {
        name: "Igba",
        address:
          "plot 12B, ondo housing Estate, Ondo Government Area, along Akure road",
        phone: "08145542635",
        lat: 7.0944,
        lng: 4.8336,
      },
      {
        name: "Akure",
        address:
          "Opposite wexford college, adjacent Fingerprint Hotel, Oba-ile, Ondo state",
        phone: "09132517385",
        lat: 7.2571,
        lng: 5.2058,
      },
      {
        name: "Owo",
        address: "Otapete street, Emure Rd Adjacent Lilijo Motel, Owo",
        phone: "07032627263, 08036612371",
        lat: 7.1959,
        lng: 5.5889,
      },
    ],
  },
  {
    city: "Port Harcourt",
    stations: [
      {
        name: "Ada George",
        address:
          "Okilton junction by Location- Iwofe Road, Opposite Livichun supermarket, Ada George.",
        phone: "09114764850",
        lat: 4.8396,
        lng: 6.9896,
      },
      {
        name: "Elelenwo",
        address:
          "The young junction by Elelenwo-Akpajo Road, Adjacent Chicken republic, Elelenwo.",
        phone: "07036463966",
        lat: 4.8453,
        lng: 7.0824,
      },
      {
        name: "Nkpolu",
        address:
          "Nkpolu junction by East west road opposite UD UKO filling station, Nkpolu.",
        phone: "07036463966",
        lat: 4.8234,
        lng: 7.0106,
      },
    ],
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 9.0765, // Centered on Abuja
  lng: 7.3986,
};

export default function LocationSelector() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStation, setSelectedStation] = useState<{
    name: string;
    address: string;
    phone: string;
    lat: number;
    lng: number;
  } | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your actual API key
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleCityChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCity(e.target.value);
    setSelectedStation(null);
  };

  const handleStationChange = (e: { target: { value: string } }) => {
    const city = locations.find((loc) => loc.city === selectedCity);
    const station = city?.stations.find((s) => s.name === e.target.value);
    if (station) {
      setSelectedStation(station);
      if (map) {
        map.panTo({ lat: station.lat, lng: station.lng });
        map.setZoom(15);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Find Our Locations</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <select
            className="w-full p-2 border rounded mb-4"
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option value="">Select a city</option>
            {locations.map((loc) => (
              <option key={loc.city} value={loc.city}>
                {loc.city}
              </option>
            ))}
          </select>
          {selectedCity && (
            <select
              className="w-full p-2 border rounded mb-4"
              onChange={handleStationChange}
              value={selectedStation?.name || ""}
            >
              <option value="">Select a station</option>
              {locations
                .find((loc) => loc.city === selectedCity)
                ?.stations.map((station) => (
                  <option key={station.name} value={station.name}>
                    {station.name}
                  </option>
                ))}
            </select>
          )}
          {selectedStation && (
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">{selectedStation.name}</h3>
              <p className="mb-2">{selectedStation.address}</p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                {selectedStation.phone}
              </p>
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {locations.flatMap((city) =>
                city.stations.map((station) => (
                  <Marker
                    key={station.name}
                    position={{ lat: station.lat, lng: station.lng }}
                    title={station.name}
                    animation={
                      selectedStation?.name === station.name
                        ? google.maps.Animation.BOUNCE
                        : undefined
                    } // Use animation BOUNCE
                  />
                ))
              )}
            </GoogleMap>
          ) : (
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-xl">Loading map...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
