import { useState, useEffect }from "react"

export default function SavedCities({ cities, onSearch, onRemove }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Saved Cities</h2>

      {cities.length === 0 ? (
        <p className="text-gray-500">No cities saved yet.</p>
      ) : (
        <ul className="space-y-2">
          {cities.map((city, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
            >
              <span
                className="cursor-pointer text-blue-600 hover:underline"
                onClick={() => onSearch(city)}
              >
                {city}
              </span>

              <button
                onClick={() => onRemove(city)}
                className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

