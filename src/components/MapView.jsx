import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [30, 30],
});

const selectedIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [40, 40],
});

const userIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [35, 35],
});

function FlyTo({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 13, { duration: 1.5 });
    }
  }, [position]);

  return null;
}

export default function MapView({
  cinemas,
  selectedCinema,
  userLocation,
  targetPosition,
  onSelect,
}) {
  return (
    <MapContainer center={[-25, 133]} zoom={4} className="h-full w-full z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* CINEMAS */}
      {cinemas.map((c) => (
        <Marker
          key={c.id}
          position={[c.lat, c.lng]}
          icon={selectedCinema?.id === c.id ? selectedIcon : redIcon}
          eventHandlers={{
            click: () => onSelect(c),
          }}
        />
      ))}

      {/* USER LOCATION */}
      {userLocation && <Marker position={userLocation} icon={userIcon} />}

      {/* FLY CONTROL */}
      <FlyTo position={targetPosition} />
    </MapContainer>
  );
}
