import { useState, useEffect } from "react";
import Navbar from "./Navbar"; 
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import Forecast from "./Forecast";
import Loader from "./Loader";
import SavedCities from "./SavedCities";
import { processForecastData } from "../utils/processForecast";

export default function Homepage() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [savedcities, setSavedCities] = useState([]);

  // load saved cities on initial render//
  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
    setSavedCities(storedCities);
    }, []);

    // save cities to local storage//
    useEffect(() => {
      if (savedcities.length > 0){
      localStorage.setItem("savedCities", JSON.stringify(savedcities));
      }
    }, [savedcities]);

  const fetchWeather = async (city) => {
    try {
      setError("");
      setWeather(null);
      setForecast(null);
      setLoading(true);

      const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const weatherUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
      const forecastUrl = import.meta.env.VITE_OPENWEATHER_FORECAST_URL;

      // ✅ Fetch current weather
      const weatherRes = await fetch(
        `${weatherUrl}?q=${city}&appid=${key}&units=metric`
      );

      if (!weatherRes.ok) {
        throw new Error("City not recognized. Please try again.");
      }

      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      // ✅ Fetch forecast
      const forecastRes = await fetch(
        `${forecastUrl}?q=${city}&appid=${key}&units=metric`
      );

      if (forecastRes.ok) {
        const forecastData = await forecastRes.json();
        const processed = processForecastData(forecastData.list);
        setForecast(processed);
      } else {
        throw new Error("Forecast could not be loaded.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addcity = (city) => {
    if (city && !savedcities.includes(city)) {
      setSavedCities([...savedcities, city]);
    }
  };

  const removecity = (city) => {
    setSavedCities(savedcities.filter((c) => c !== city));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/image/weather-bg.jpg')" }}
    >
      <Navbar />

      {/* Card container */}
      <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 mt-40 w-full max-w-sm sm:max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Weather Dashboard</h1>
        <p className="text-sm sm:text-base mb-4">Search for the current weather in any city worldwide.</p>

        <SearchBar onSearch={fetchWeather} />

        <ErrorMessage message={error} />
        
        {loading &&(<div className="flex justify-center my-6">
          <Loader />
        </div>
      )}

      {!loading && weather && (
        <div>
          <WeatherCard weatherData={weather} />
          <button
            onClick={() => addcity(weather.name)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
           Save City
          </button>
        </div>
      )}      

      {!loading && forecast && <Forecast forecastData={forecast} />}

      <SavedCities cities={savedcities} onSearch={fetchWeather} onRemove={removecity} />
      </div>
    </div>
  );
}
