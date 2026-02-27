import React from "react";

export default function Forecast({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
    return null; 
  }

  return (
    <div className="mt-8 p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-center">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className="bg-blue-50 p-4 rounded-xl shadow-sm flex flex-col items-center"
          >
            <p className="font-medium">{day.date}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="weather icon"
              className="w-12 h-12"
            />
            <p className="text-lg font-semibold">{day.temp}°C</p>
            <p className="text-sm text-gray-600">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
