import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import icon images
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Station {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

interface Stations {
  [key: string]: Station[];
}

const stations: Stations = {
  Abuja: [
    {
      name: "Life Camp",
      address:
        "Plot 918, Cadastral Zone opposite Holy Family Catholic Church, Behind La Vida local, Lifecamp.",
      phone: "09165593865",
      lat: 9.0765,
      lng: 7.401,
    },
    {
      name: "Kuje 1",
      address: "Plot 1 along 1000 units Pengi road, Kuchiyako district, Kuje.",
      phone: "09166942224",
      lat: 8.8791,
      lng: 7.2285,
    },
    {
      name: "Kuje 2",
      address:
        "Plot 2, Kango district, along Holy Family Road before Funtag School, Kuje.",
      phone: "09166695324",
      lat: 8.8791,
      lng: 7.2285,
    },
    {
      name: "Gwagwalada",
      address: "District 3 Dukpa Layout, after SOS school, Gwagwalada.",
      phone: "09165804886",
      lat: 8.9431,
      lng: 7.0917,
    },
    {
      name: "Kubwa",
      address:
        "Alles Charis Gas, opp Dantata Estate(2nd gate), along Chikakuwere, Arab Road, Kubwa",
      phone: "",
      lat: 9.1525,
      lng: 7.3281,
    },
  ],
  Ondo: [
    {
      name: "Igba",
      address:
        "plot 12B, ondo housing Estate, Ondo Government Area, along Akure road",
      phone: "08145542635",
      lat: 7.1,
      lng: 4.8333,
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
      lat: 7.196,
      lng: 5.593,
    },
  ],
  "Port Harcourt": [
    {
      name: "Ada George",
      address:
        "Okilton junction by Location- Iwofe Road, Opposite Livichun supermarket, Ada George.",
      phone: "09114764850",
      lat: 4.8396,
      lng: 6.9887,
    },
    {
      name: "Elelenwo",
      address:
        "The young junction by Elelenwo-Akpajo Road, Adjacent Chicken republic, Elelenwo.",
      phone: "07036463966",
      lat: 4.8396,
      lng: 7.0498,
    },
    {
      name: "Nkpolu",
      address:
        "Nkpolu junction by East west road opposite UD UKO filling station, Nkpolu.",
      phone: "07036463966",
      lat: 4.8242,
      lng: 7.01,
    },
  ],
};

// This component will update the map view to the selected station
const MapUpdater: React.FC<{ station: Station }> = ({ station }) => {
  const map = useMap();
  map.setView([station.lat, station.lng], 12); // Change view to the selected station
  return null;
};

const StationsLeafletMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Abuja"); // Default to "Abuja"
  const [selectedStation, setSelectedStation] = useState<Station | null>(
    stations["Abuja"][0]
  ); // Default to first station in Abuja

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    setSelectedStation(stations[newRegion][0]); // Default to the first station in the new region
  };

  const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stationIndex = parseInt(event.target.value);
    setSelectedStation(stations[selectedRegion][stationIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">ACGL Stations</h1>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3">
          <label
            htmlFor="region-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select a region
          </label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {Object.keys(stations).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>

          <label
            htmlFor="station-select"
            className="block text-sm font-medium text-gray-700 mt-4 mb-2"
          >
            Select a station
          </label>
          <select
            id="station-select"
            value={stations[selectedRegion].indexOf(selectedStation!)}
            onChange={handleStationChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {stations[selectedRegion].map((station, index) => (
              <option key={index} value={index}>
                {station.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-2/3 h-96">
          {selectedStation && (
            <MapContainer
              center={[selectedStation.lat, selectedStation.lng]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[selectedStation.lat, selectedStation.lng]}>
                <Popup>
                  <h3 className="font-semibold">{selectedStation.name}</h3>
                  <p className="text-sm">{selectedStation.address}</p>
                  {selectedStation.phone && (
                    <p className="text-sm font-medium">
                      {selectedStation.phone}
                    </p>
                  )}
                </Popup>
              </Marker>
              <MapUpdater station={selectedStation} />
            </MapContainer>
          )}
        </div>
      </div>
      {selectedRegion && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Stations in {selectedRegion}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations[selectedRegion].map((station, index) => (
              <div key={index} className="border rounded-md p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{station.name}</h3>
                <p className="text-sm mb-2">{station.address}</p>
                {station.phone && (
                  <p className="text-sm font-medium">{station.phone}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StationsLeafletMap;
