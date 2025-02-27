import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from "react-icons/wi";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherInfo } = weather;
  const condition = weatherInfo[0].main.toLowerCase();

  const iconMap = {
    clear: <WiDaySunny size={50} />,
    clouds: <WiCloud size={50} />,
    rain: <WiRain size={50} />,
    snow: <WiSnow size={50} />,
    mist: <WiFog size={50} />,
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="text-xl">{main.temp}°C</p>
      <div className="text-5xl">
        {iconMap[condition] || <WiCloud size={50} />}
      </div>
      <p className="text-lg">{weatherInfo[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
