import { FaPhone, FaTicketAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function DetailsPanel({ cinema }) {
  const [open, setOpen] = useState(false);

  if (!cinema) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-lg gap-2">
        Select a cinema <MdMovie />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* IMAGE WITH OVERLAY */}
      <div className="relative group">
        <img
          src={cinema.image}
          alt={cinema.name}
          className="w-full h-64 object-cover rounded-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />

        <h2 className="absolute bottom-4 left-4 text-2xl font-bold">
          {cinema.name}
        </h2>
      </div>

      {/* INFO */}
      <div className="space-y-2 text-sm text-gray-300">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          {cinema.address}
        </p>

        <p className="flex items-center gap-2">
          <FaPhone className="text-green-400" />
          {cinema.phoneNumber}
        </p>

        <p className="flex items-center gap-2">
          <FaTicketAlt className="text-yellow-400" />
          {cinema.contact}
        </p>

        <p className="flex items-center gap-2">
          <FaGlobe className="text-blue-400" />
          {cinema.country}
        </p>
      </div>

      {/* PRICE */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
          <FaTicketAlt />
          <span>Price: ${cinema.price}</span>
        </div>
      </div>

      {/* MOVIES */}
      <div>
        <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
          <MdMovie /> Now Showing
        </h3>

        <div className="flex flex-wrap gap-2">
          {cinema.movies.map((m, i) => (
            <span
              key={i}
              className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm hover:bg-white/20"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div>
        <h3 className="font-semibold mb-2 text-lg">⭐ Reviews</h3>

        <div className="space-y-2">
          {cinema.reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 p-3 rounded-lg text-sm text-gray-300"
            >
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* BOOK BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-gradient-to-r from-red-600 to-red-500 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
      >
        <FaTicketAlt /> Book Ticket
      </button>

      {open && <BookingModal cinema={cinema} onClose={() => setOpen(false)} />}
    </div>
  );
}
