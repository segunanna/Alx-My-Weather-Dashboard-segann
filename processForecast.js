export function processForecastData(list) {

  const daily = {};

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!daily[date] && item.dt_txt.includes("12:00:00")) {
      daily[date] = {
        date,
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      };
    }
  });

  return Object.values(daily);
}
