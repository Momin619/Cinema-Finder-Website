import { useState } from "react";
import { cinemas } from "./data/cinemas";
import MapView from "./components/MapView";
import DetailsPanel from "./components/DetailsPanel";
import LocateMe from "./components/LocateMe";
import "./styles/output.css";
import "./styles/index.css";
import { Toaster } from "react-hot-toast";
export default function App() {
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [activeTarget, setActiveTarget] = useState(null);

  const handleCinemaSelect = (cinema) => {
    setSelectedCinema(cinema);
    setActiveTarget("cinema"); // 🔥 IMPORTANT
  };

  const handleLocate = (coords) => {
    setUserLocation(coords);
    setSelectedCinema(null);
    setActiveTarget("user"); // 🔥 IMPORTANT
  };

  let targetPosition = null;

  if (activeTarget === "user") {
    targetPosition = userLocation;
  } else if (activeTarget === "cinema" && selectedCinema) {
    targetPosition = [selectedCinema.lat, selectedCinema.lng];
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-950 text-white">
        {/* HEADER */}
        <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-red-500">Cinema Finder</h1>
        </div>

        <div className="p-6 flex flex-col lg:flex-row gap-6">
          {/* LEFT */}
          <div className="lg:w-[40%] w-full space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden border border-gray-800">
              <MapView
                cinemas={cinemas}
                selectedCinema={selectedCinema}
                userLocation={userLocation}
                targetPosition={targetPosition}
                onSelect={handleCinemaSelect}
              />
            </div>

            <LocateMe onLocate={handleLocate} />
          </div>

          {/* DETAILS */}
          <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-gray-800">
            <DetailsPanel cinema={selectedCinema} />
          </div>
        </div>
      </div>
    </>
  );
}
