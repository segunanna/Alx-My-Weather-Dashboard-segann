import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-6 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}



