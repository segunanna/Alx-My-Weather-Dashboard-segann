export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
      style={{ backgroundImage: "url('/image/weather-bg.jpg')" }}
    >
       <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full mt-24 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        About
      </h1>

      {/* Description */}
      <div className="text-gray-700 text-lg mb-4 max-w-2xl text-center mx-auto space-y-4 text-justify">
        <p>The Weather Dashboard is a simple yet powerful web application that delivers real-time weather updates and a 5-day forecast for any city across the globe.</p>
        <p>By integrating with the OpenWeather API, the app provides users with essential weather details such as temperature, humidity, wind speed, and general conditions (e.g., sunny, cloudy, rainy).</p>

        <p>With its intuitive search bar, users can quickly look up any city and instantly view current weather conditions alongside a visual forecast of the next five days.</p> 
        <p>The forecast helps users plan ahead by displaying daily temperature ranges, expected conditions, and icons that represent the weather.</p>
      </div>
      </div>
    </div>
  );
}

