import { FaLocationArrow } from "react-icons/fa";

export default function LocateMe({ onLocate }) {
  const handleLocate = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        onLocate(coords);
      },
      () => {
        alert("Location access denied");
      },
    );
  };

  return (
    <button
      onClick={handleLocate}
      className="
        w-full 
        bg-gradient-to-r from-red-600 to-red-500 
        py-3 rounded-xl 
        flex items-center justify-center gap-3 
        font-semibold text-lg
        shadow-lg shadow-red-900/30
        hover:scale-[1.02] hover:shadow-red-600/40
        active:scale-[0.98]
        transition-all duration-200
      "
    >
      <FaLocationArrow className="text-white text-lg animate-pulse" />
      Locate Me
    </button>
  );
}
