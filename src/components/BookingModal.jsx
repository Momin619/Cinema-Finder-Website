import { useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

export default function BookingModal({ cinema, onClose }) {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [date, setDate] = useState("");

  const handleBooking = () => {
    if (!name || !date) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success(`Booking confirmed at ${cinema.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 🔥 BLUR OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* 🔥 MODAL */}
      <div
        className="
        relative z-50 
        w-[90%] max-w-md 
        bg-gray-900/90 backdrop-blur-xl
        p-6 rounded-2xl 
        border border-gray-700
        shadow-2xl shadow-black/50
        animate-[fadeIn_.25s_ease]
      "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">
          Book Ticket
        </h2>

        {/* FORM */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="date"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="number"
            min="1"
            max="10"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 outline-none"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />

          <button
            onClick={handleBooking}
            className="
              w-full 
              bg-gradient-to-r from-red-600 to-red-500 
              py-3 rounded-xl 
              font-semibold text-lg
              hover:scale-[1.02] active:scale-[0.98]
              transition-all
            "
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
