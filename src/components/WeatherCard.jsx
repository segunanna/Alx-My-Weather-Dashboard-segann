function WeatherCard({ weatherData }) {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return null; 
  }

  const { name, main, weather, wind } = weatherData;

  // Weather details
  const condition = weather[0].main;
  const description = weather[0].description;
  const iconCode = weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-6 mt-6 w-80 text-center">
      <h2 className="text-2xl text-blue-400 font-bold mb-2">{name}</h2>
      <img src={iconSrc} alt={condition} className="mx-auto my-4 w-20 h-20" />
      <p className="text-xl capitalize">{description}</p>
      <p className="text-4xl font-bold mt-2">{Math.round(main.temp)}°C</p>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <p>💧 Humidity: {main.humidity}%</p>
        <p>💨 Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;

